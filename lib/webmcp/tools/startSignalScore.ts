import { REPORT_PRICE, REPORT_CHECKOUT_URL } from '@/lib/constants';
import { SITE, AS_OF } from '../data/meta';

// The one action tool. It only hands back the checkout link, and only after
// the person in the browser says yes. It never opens a window, collects an
// email, or starts a check, so it costs nothing until someone pays.
const MAX_NAME = 80;

export const startSignalScore: ModelContextToolDefinition = {
  name: 'start_signal_score',
  description: `Offer the person a Signal Score Report. Asks them to confirm first, and only then returns the checkout link (${REPORT_PRICE}). Does not start a check or take payment by itself.`,
  inputSchema: {
    type: 'object',
    properties: {
      business_name: {
        type: 'string',
        maxLength: MAX_NAME,
        description: 'Optional. Used only in the confirmation question. It is not stored or sent anywhere.',
      },
    },
  },
  annotations: { readOnlyHint: false },
  execute: async (input, client) => {
    const raw = typeof input.business_name === 'string' ? input.business_name.trim() : '';
    const name = raw.length > MAX_NAME ? `${raw.slice(0, MAX_NAME)}...` : raw;
    const question = `Open the Signal Score checkout (${REPORT_PRICE})${name ? ` for ${name}` : ''}?`;

    const ask = () => window.confirm(question);
    // requestUserInteraction is the spec's way to pause for the human. If this
    // browser build does not provide it, ask directly. Either way the link is
    // only returned after a yes.
    const accepted =
      typeof client?.requestUserInteraction === 'function'
        ? await client.requestUserInteraction(ask)
        : ask();
    if (!accepted) return { cancelled: true };

    return {
      checkout_url: REPORT_CHECKOUT_URL,
      price: REPORT_PRICE,
      what_you_get:
        'A full picture of what the major AI assistants say about the business, what they get wrong, and a ranked list of what to fix first.',
      source_url: `${SITE}/signal-score-report`,
      as_of: AS_OF,
    };
  },
};

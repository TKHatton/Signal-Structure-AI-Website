import { SERVICES } from '@/lib/services';
import type { ServiceKey } from '@/lib/services';
import { SITE, AS_OF } from '../data/meta';

const KEYS = Object.keys(SERVICES) as ServiceKey[];

/** Turns a site-relative link into an absolute one. mailto and https links pass through. */
export const absoluteUrl = (href: string) => (href.startsWith('/') ? `${SITE}${href}` : href);

export const describeService = (key: ServiceKey) => {
  const s = SERVICES[key];
  return { key, name: s.name, price: s.price, term: s.term, why: s.why, url: absoluteUrl(s.href) };
};

export const getServices: ModelContextToolDefinition = {
  name: 'get_services',
  description:
    'List what Signal & Structure AI sells, with the current price, term, and a plain reason for each. Pass a service to get just one. Prices come straight from the site.',
  inputSchema: {
    type: 'object',
    properties: {
      service: {
        type: 'string',
        enum: KEYS,
        description: 'Optional. One service. Leave out to get all seven.',
      },
    },
  },
  annotations: { readOnlyHint: true },
  execute: async (input) => {
    const service = input.service as ServiceKey | undefined;
    if (service !== undefined && !KEYS.includes(service)) {
      throw new Error(`Unknown service. Use one of: ${KEYS.join(', ')}.`);
    }
    return {
      services: (service ? [service] : KEYS).map(describeService),
      source_url: `${SITE}/signal-services`,
      as_of: AS_OF,
    };
  },
};

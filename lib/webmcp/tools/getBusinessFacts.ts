import { COMPANY_NAME, TAGLINE, LOCATION, EMAIL, PHONE } from '@/lib/constants';
import { SITE, AS_OF } from '../data/meta';

// Describes the business only. No bios, titles, or street address.
export const getBusinessFacts: ModelContextToolDefinition = {
  name: 'get_business_facts',
  description:
    'Get the basic, official facts about Signal & Structure AI: what it is, what it does, where it is, and how to reach it. Use this first when someone asks who the business is.',
  inputSchema: { type: 'object', properties: {} },
  annotations: { readOnlyHint: true },
  execute: async () => ({
    name: COMPANY_NAME,
    tagline: TAGLINE,
    description: `${COMPANY_NAME} helps businesses be found, be accurate, and be recommended when people ask AI assistants like ChatGPT, Claude, and Gemini about them. It shows a business what those assistants say about it, then helps fix what is wrong.`,
    location: LOCATION,
    website: SITE,
    contact: { email: EMAIL, phone: PHONE },
    source_url: `${SITE}/about`,
    as_of: AS_OF,
  }),
};

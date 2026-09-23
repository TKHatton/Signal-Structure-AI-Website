import { CHATGPT_ADVISOR_URL } from '@/lib/constants';
import { ADVISOR_CONTENT, ADVISOR_TOPICS } from '../data/advisor';
import type { AdvisorTopic } from '../data/advisor';
import { AS_OF } from '../data/meta';

export const askAdvisor: ModelContextToolDefinition = {
  name: 'ask_advisor',
  description:
    'Get a general, educational answer from Signal Advisor about AI discoverability: what it is, how to improve it, how AI platforms find businesses, and how the Signal Score works. General answers only, nothing personalized to one business.',
  inputSchema: {
    type: 'object',
    properties: {
      topic: {
        type: 'string',
        enum: [...ADVISOR_TOPICS],
        description: 'Which topic to explain.',
      },
    },
    required: ['topic'],
  },
  annotations: { readOnlyHint: true },
  execute: async (input) => {
    const topic = input.topic as AdvisorTopic;
    if (!ADVISOR_TOPICS.includes(topic)) {
      throw new Error(`topic must be one of: ${ADVISOR_TOPICS.join(', ')}.`);
    }
    return {
      ...ADVISOR_CONTENT[topic],
      note: 'General educational answer. It is not personalized to any one business. A Signal Score Report gives a business its own answers.',
      source_url: CHATGPT_ADVISOR_URL,
      as_of: AS_OF,
    };
  },
};

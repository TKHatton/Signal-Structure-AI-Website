import { recommend } from '@/lib/services';
import type { Answers } from '@/lib/services';
import { SITE, AS_OF } from '../data/meta';
import { describeService } from './getServices';

const KNOWN = ['no', 'yes'];
const GOAL = ['know', 'fix', 'content', 'chat', 'track'];
const WHO = ['me', 'you'];

const oneOf = (name: string, value: unknown, allowed: string[], optional = false) => {
  if (value === undefined && optional) return;
  if (typeof value !== 'string' || !allowed.includes(value)) {
    throw new Error(`${name} must be one of: ${allowed.join(', ')}.`);
  }
};

// Uses the same recommend() as the Service Finder on the site, so the two
// always give the same answer.
export const recommendService: ModelContextToolDefinition = {
  name: 'recommend_service',
  description:
    'Recommend the best next Signal & Structure AI service for a business. Uses the same logic as the Service Finder on the site. A Signal Score is always the first step for a business that does not have one.',
  inputSchema: {
    type: 'object',
    properties: {
      known: {
        type: 'string',
        enum: KNOWN,
        description: 'Does the business already have a Signal Score? "no" or "yes".',
      },
      goal: {
        type: 'string',
        enum: GOAL,
        description:
          'What they want most: know what AI says about them, fix what AI gets wrong, keep publishing content, get customers using their tools inside ChatGPT, or track progress over time.',
      },
      who: {
        type: 'string',
        enum: WHO,
        description: 'Only matters for "fix" and "content". "me" if they will do the work, "you" if they want it done for them.',
      },
    },
    required: ['known', 'goal'],
  },
  annotations: { readOnlyHint: true },
  execute: async (input) => {
    oneOf('known', input.known, KNOWN);
    oneOf('goal', input.goal, GOAL);
    oneOf('who', input.who, WHO, true);
    const answers = input as Answers;
    const { best, next } = recommend(answers);
    return {
      best: describeService(best),
      next: next ? describeService(next) : null,
      reason: describeService(best).why,
      source_url: `${SITE}/signal-services`,
      as_of: AS_OF,
    };
  },
};

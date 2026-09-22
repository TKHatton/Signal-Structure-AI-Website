import { SCORE_HISTORY, SCORE_HISTORY_CAVEAT } from '../data/scoreHistory';
import { SITE } from '../data/meta';

export const getOurScoreHistory: ModelContextToolDefinition = {
  name: 'get_our_score_history',
  description:
    "Get Signal & Structure AI's own Signal Score history, from the first run to the latest, with what changed each time. The business measured itself the same way it measures clients.",
  inputSchema: { type: 'object', properties: {} },
  annotations: { readOnlyHint: true },
  execute: async () => {
    const history = SCORE_HISTORY.filter((row) => row.published).map(
      ({ published, ...row }) => {
        void published;
        return row;
      },
    );
    return {
      history,
      caveat: SCORE_HISTORY_CAVEAT,
      source_url: `${SITE}/about`,
      as_of: history.length ? history[history.length - 1].date : SCORE_HISTORY[0].date,
    };
  },
};

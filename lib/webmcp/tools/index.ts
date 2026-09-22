import type { ToolName } from '../toolSurface';
import { getBusinessFacts } from './getBusinessFacts';
import { getServices } from './getServices';
import { recommendService } from './recommendService';
import { askAdvisor } from './askAdvisor';
import { getOurScoreHistory } from './getOurScoreHistory';
import { startSignalScore } from './startSignalScore';

export function buildToolDefinitions(): Record<ToolName, ModelContextToolDefinition> {
  return {
    get_business_facts: getBusinessFacts,
    get_services: getServices,
    ask_advisor: askAdvisor,
    recommend_service: recommendService,
    start_signal_score: startSignalScore,
    get_our_score_history: getOurScoreHistory,
  };
}

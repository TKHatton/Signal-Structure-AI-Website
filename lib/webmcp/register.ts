import { buildToolDefinitions } from './tools';
import { toolsForPath } from './toolSurface';

let activeController: AbortController | null = null;

export type ToolSurface = {
  /** The tools this page exposes, whether or not the browser supports WebMCP. */
  tools: string[];
  /** True if a modelContext existed and at least one tool registered on it. */
  registered: boolean;
  /** Tools the browser refused. Each one fails alone, so the rest still register. */
  failed: string[];
};

function findModelContext(): ModelContext | undefined {
  if (typeof document !== 'undefined' && document?.modelContext) return document.modelContext;
  // Older location, deprecated in Chrome 150.
  if (typeof navigator !== 'undefined' && navigator?.modelContext) return navigator.modelContext;
  return undefined;
}

/**
 * Aborts the previous page's registration, then registers the tools for this
 * page. In a browser without WebMCP this returns quietly, so the site behaves
 * exactly as it does without this module. It never throws.
 *
 * App Router navigation does not reload the page, so the provider calls this
 * on every route change. If two calls overlap, the later one wins.
 */
export async function syncToolSurface(pathname: string): Promise<ToolSurface> {
  const names = toolsForPath(pathname);

  const none = { tools: names, registered: false, failed: [] as string[] };

  const modelContext = findModelContext();
  if (!modelContext) return none;

  activeController?.abort();
  const controller = new AbortController();
  activeController = controller;

  const definitions = buildToolDefinitions();
  const failed: string[] = [];
  for (const name of names) {
    if (controller.signal.aborted) return none;
    try {
      await modelContext.registerTool(definitions[name], { signal: controller.signal });
    } catch {
      failed.push(name);
    }
  }
  if (controller.signal.aborted) return none;
  return { tools: names, registered: failed.length < names.length, failed };
}

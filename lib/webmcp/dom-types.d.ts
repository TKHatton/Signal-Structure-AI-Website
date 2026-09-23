export {};

// Types for the WebMCP browser API (Chrome 149+ origin trial, or the
// chrome://flags/#enable-webmcp-testing flag). Adapted from the Relay build.
// The API lives on document.modelContext. navigator.modelContext is the older
// location, deprecated in Chrome 150, so the code checks both.
declare global {
  interface ModelContextClient {
    /**
     * Pauses the tool and runs the callback in the page so a human can answer.
     * The callback's return value is what this resolves to.
     */
    requestUserInteraction: <T>(callback: () => Promise<T> | T) => Promise<T>;
  }

  interface ModelContextToolAnnotations {
    readOnlyHint?: boolean;
  }

  interface ModelContextToolDefinition {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    annotations?: ModelContextToolAnnotations;
    execute: (input: Record<string, unknown>, client: ModelContextClient) => Promise<unknown>;
  }

  interface ModelContextRegisterOptions {
    signal?: AbortSignal;
  }

  interface ModelContext {
    registerTool: (
      tool: ModelContextToolDefinition,
      options?: ModelContextRegisterOptions,
    ) => Promise<void> | void;
  }

  interface Document {
    modelContext?: ModelContext;
  }

  interface Navigator {
    modelContext?: ModelContext;
  }
}

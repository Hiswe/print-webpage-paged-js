declare module "pagedjs" {
  export class Chunker {}

  export class Polisher {
    constructor(setup: boolean);
    afterRender(): void;
    async add(...args: Array<{ url: string } | string>): Promise<void>;
  }

  export class Handler {
    constructor(chunker: Chunker, polisher: Polisher, caller: any);
    afterPreview(): void;
  }

  type HandlerParams = ConstructorParameters<typeof Handler>;

  export class Previewer {
    constructor();
    registerHandlers: <T extends new (...params: HandlerParams) => Handler>(handler: T) => void;
    preview: (content: string, cssFiles: Array<string | Record<string, string>>, element: HTMLElement) => void;
  };
}

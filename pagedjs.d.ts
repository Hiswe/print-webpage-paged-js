declare module "pagedjs" {
  export class Handler {
    afterPreview: () => void;
  }

  export class Previewer {
    constructor();
    registerHandlers: (handler: Handler) => void;
    preview: (content: string, cssFiles: Array<string>, element: HTMLElement) => void;
  };
}

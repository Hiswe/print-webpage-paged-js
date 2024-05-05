declare module "pagedjs" {
  export class Handler {
    afterPreview(): void;
  }

  export class Previewer {
    constructor();
    registerHandlers: <T extends new (...args: any[]) => Handler>(handler: T) => void;
    preview: (content: string, cssFiles: Array<string>, element: HTMLElement) => void;
  };
}

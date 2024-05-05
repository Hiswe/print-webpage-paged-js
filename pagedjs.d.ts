declare module "pagedjs" {
  interface Previewer {
    constructor: () => void
    preview: (content: string, cssFiles: Array<string>, element: HTMLElement) => void
  }

  export = { Previewer };
}

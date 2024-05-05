declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<NonNullable<unknown>, NonNullable<unknown>, any>;
  export default component;
}

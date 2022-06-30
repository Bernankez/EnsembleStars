/// <reference types="vite/client" />
export * from "./components/button/types";
export * from "./components/config-provider/types";
export * from "./components/icon/types";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

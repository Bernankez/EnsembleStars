import type { App, Plugin } from "vue";
import * as components from "./packages";
import "./styles/index.scss";
import { forIn } from "lodash-es";

const createES = () => ({
  install: (app: App) => {
    forIn(components, (component, key) => {
      if (!key.startsWith("_")) {
        app.use(component as Plugin);
      }
    });
  },
});

export * from "./packages";
export { createES };

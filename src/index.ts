import type { App } from "vue";
import * as components from "./components";
import "./styles/index.scss";
import { forIn } from "lodash-es";

const createES = () => ({
  install: (app: App) => {
    forIn(components, component => {
      app.component(component.name, component);
    });
  },
});

export * from "./components";
export { createES };

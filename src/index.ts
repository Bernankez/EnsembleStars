import type { App } from "vue";
import * as components from "./components";
import { forIn } from "lodash-es";

const createES = () => ({
  install: (app: App) => {
    forIn(components, component => {
      app.component(component.name, component);
    });
  },
});

export { createES, components };

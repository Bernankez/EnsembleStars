import type { App } from "vue";
import { kebabCase } from "lodash-es";

export const withInstall = <T>(_component: T) => {
  (_component as Record<string, unknown>).install = (app: App) => {
    const { name } = _component as unknown as { name: string };
    app.component(name, _component);
    app.component(`es-${kebabCase(name.substring(2))}`, _component);
  };
  return _component as T & { install: (app: App) => void };
};

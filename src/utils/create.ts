import { App } from "vue";
import version from "@/version";
import { kebabCase, lowerCase } from "lodash-es";

export function createBEM<CNAME extends string>(name: CNAME) {
  function bem(): CNAME;
  function bem<EL extends string>(element: EL): `${CNAME}__${EL}`;
  function bem<MOD extends string>(element: "" | undefined, modifier: MOD): `${CNAME}--${MOD}`;
  function bem<EL extends string, MOD extends string>(element: EL, modifier: MOD): `${CNAME}__${EL}--${MOD}`;
  function bem(element?: string, modifier?: string) {
    let className: string = name;
    if (element) {
      className = `${className}__${element}`;
    }
    if (modifier) {
      className = `${className}--${modifier}`;
    }
    return className;
  }

  return bem;
}

export function createNamespace<PREFIX extends string>(name: PREFIX) {
  const prefixedName: `__es-${PREFIX}` = `__es-${name}`;
  return [prefixedName, createBEM(prefixedName)] as const;
}

type ComponentInstance = any;

export function createES({ prefix = "ES", components = [] }: { prefix?: string; components?: ComponentInstance[] }) {
  const installTargets: App[] = [];

  function registerComponent(app: App, name: string, component: ComponentInstance) {
    const registered = app.component(prefix + name);
    if (!registered) {
      // ESButton
      app.component(prefix + name, component);
      // es-button
      app.component(`${lowerCase(prefix)}-${kebabCase(name)}`, component);
    }
  }

  function install(app: App) {
    if (installTargets.includes(app)) return;
    installTargets.push(app);
    components.forEach(component => {
      const { name } = component;
      registerComponent(app, name, component);
    });
  }

  return {
    version,
    install,
    prefix,
  };
}

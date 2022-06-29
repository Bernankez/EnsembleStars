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

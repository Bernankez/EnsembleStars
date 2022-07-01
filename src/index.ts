import * as components from "./packages";
import { createES } from "./utils";
import "./styles/index.scss";

const es = createES({
  components: Object.keys(components).map(key => components[key as keyof typeof components]),
});

export default es;
export const install = es.install;
export { createES };
export * from "./packages";

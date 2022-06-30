import type { InjectionKey, ComputedRef } from "vue";

export const Dark: InjectionKey<ComputedRef<boolean>> = Symbol("Dark");

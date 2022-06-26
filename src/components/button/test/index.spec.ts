import { describe, expect, it } from "vitest";
import { render } from "@testing-library/vue";
import Button from "../index.vue";

describe("test", () => {
  it("should be 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("should be button", () => {
    const { getByText } = render(Button, {
      slots: {
        default: "button",
      },
    });
    expect(getByText("button")).toBeTruthy();
  });
});

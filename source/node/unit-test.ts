import { ESLint } from "eslint";
import { describe, expect, test } from "vitest";
import { nodeConfiguration } from "@sharadox/es-lint-configuration-web-library/node";

const lint = async (code: string, filePath = "source/example/index.ts", ignores?: string[]) => {
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: nodeConfiguration({ ignores }) });
  return (await eslint.lintText(code, { filePath }))[0];
};

describe("nodeConfiguration", () => {
  test("reports TypeScript mistakes", async () => {
    const result = await lint("const unused: any = 1;\n");
    expect(result?.messages.map((message) => message.ruleId)).toEqual([
      "@typescript-eslint/no-unused-vars",
      "@typescript-eslint/no-explicit-any",
    ]);
  });

  test("leaves formatting to Prettier", async () => {
    expect((await lint("export const spaced   =    1\n"))?.messages).toEqual([]);
  });

  test.each(["documentation/index.ts", "distribution/index.js", "coverage/index.js", "lead/index.ts"])(
    "ignores %s (generated folders and extra ignores)",
    async (filePath) => {
      const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: nodeConfiguration({ ignores: ["lead/**"] }),
      });
      expect(await eslint.isPathIgnored(filePath)).toBe(true);
    },
  );
});

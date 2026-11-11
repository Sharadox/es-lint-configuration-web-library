import { ESLint } from "eslint";
import { expect, test } from "vitest";
import { nextJsApplicationConfiguration } from "@sharadox/es-lint-configuration-web-library/next-js-application";

const eslint = () =>
  new ESLint({ overrideConfigFile: true, overrideConfig: nextJsApplicationConfiguration({ ignores: ["lead/**"] }) });

test("applies the Next.js rules", async () => {
  const code = 'export default function Page() {\n  return <img src="/a.png" alt="" />;\n}\n';
  const [result] = await eslint().lintText(code, { filePath: "src/app/page.tsx" });
  expect(result?.messages.map((message) => message.ruleId)).toContain("@next/next/no-img-element");
});

test.each([".next/server/page.js", "test-results/report.js", "next-env.d.ts", "coverage/index.js", "lead/a.ts"])(
  "ignores %s",
  async (filePath) => {
    expect(await eslint().isPathIgnored(filePath)).toBe(true);
  },
);

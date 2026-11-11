import { ESLint } from "eslint";
import { expect, test } from "vitest";
import { reactLibraryConfiguration } from "@sharadox/es-lint-configuration-web-library/react-library";

test("adds the React hooks rules", async () => {
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: reactLibraryConfiguration() });
  const code =
    'import { useState } from "react";\nexport function Box({ open }: { open: boolean }) {\n  if (open) useState(0);\n  return null;\n}\n';
  const [result] = await eslint.lintText(code, { filePath: "source/box/index.tsx" });
  expect(result?.messages.map((message) => message.ruleId)).toContain("react-hooks/rules-of-hooks");
});

import javaScript from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import type { Linter } from "eslint";
import typeScriptEslint from "typescript-eslint";
import { GENERATED_FOLDERS } from "@sharadox/es-lint-configuration-web-library/ignore";
import type { EsLintOptions } from "@sharadox/es-lint-configuration-web-library/node/type";

/**
 * ESLint for TypeScript that runs on Node (tools, GitHub actions, server libraries): JavaScript and TypeScript
 * recommended rules, with formatting left to Prettier.
 *
 * @example
 * // eslint.config.mjs
 * import { nodeConfiguration } from "@sharadox/es-lint-configuration-web-library/node";
 * export default nodeConfiguration({ ignores: ["lead/**"] });
 */
export function nodeConfiguration({ ignores = [] }: EsLintOptions = {}): Linter.Config[] {
  return defineConfig([
    javaScript.configs.recommended,
    ...typeScriptEslint.configs.recommended,
    prettier,
    globalIgnores([...GENERATED_FOLDERS, ...ignores]),
  ]);
}

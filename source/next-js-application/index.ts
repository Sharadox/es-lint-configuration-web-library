import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import type { Linter } from "eslint";
import { GENERATED_FOLDERS, NEXT_JS_GENERATED } from "@sharadox/es-lint-configuration-web-library/ignore";
import type { EsLintOptions } from "@sharadox/es-lint-configuration-web-library/node/type";

/**
 * ESLint for Next.js applications: Next.js core web vitals and TypeScript rules (React and hooks included),
 * formatting left to Prettier, Next.js and Playwright output ignored. Needs `eslint-config-next` installed.
 *
 * @example
 * // eslint.config.mjs
 * import { nextJsApplicationConfiguration } from "@sharadox/es-lint-configuration-web-library/next-js-application";
 * export default nextJsApplicationConfiguration();
 */
export function nextJsApplicationConfiguration({ ignores = [] }: EsLintOptions = {}): Linter.Config[] {
  return defineConfig([
    ...nextVitals,
    ...nextTypeScript,
    prettier,
    globalIgnores([...GENERATED_FOLDERS, ...NEXT_JS_GENERATED, ...ignores]),
  ]);
}

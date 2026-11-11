import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import type { Linter } from "eslint";
import { nodeConfiguration } from "@sharadox/es-lint-configuration-web-library/node";
import type { EsLintOptions } from "@sharadox/es-lint-configuration-web-library/node/type";

/**
 * ESLint for React libraries: the Node configuration plus the React hooks and React compiler rules.
 *
 * @example
 * // eslint.config.mjs
 * import { reactLibraryConfiguration } from "@sharadox/es-lint-configuration-web-library/react-library";
 * export default reactLibraryConfiguration();
 */
export function reactLibraryConfiguration(options: EsLintOptions = {}): Linter.Config[] {
  return defineConfig([...nodeConfiguration(options), reactHooks.configs.flat.recommended]);
}

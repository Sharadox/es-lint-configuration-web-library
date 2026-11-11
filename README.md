# @sharadox/es-lint-configuration-web-library

Shared [ESLint](https://eslint.org) flat configurations for every Sharadox project. Each kind of project has its own entry point, so a Node tool never loads React or Next.js rules. Formatting is left to Prettier (see `@sharadox/prettier-configuration-web-library`).

## Install

```sh
pnpm add -D eslint typescript @sharadox/es-lint-configuration-web-library
# Next.js applications also need:
pnpm add -D eslint-config-next
```

## Use

```js
// eslint.config.mjs (a tool, a GitHub action, a server library)
import { nodeConfiguration } from "@sharadox/es-lint-configuration-web-library/node";
export default nodeConfiguration();
```

```js
// eslint.config.mjs (a React library)
import { reactLibraryConfiguration } from "@sharadox/es-lint-configuration-web-library/react-library";
export default reactLibraryConfiguration();
```

```js
// eslint.config.mjs (a Next.js application)
import { nextJsApplicationConfiguration } from "@sharadox/es-lint-configuration-web-library/next-js-application";
export default nextJsApplicationConfiguration();
```

Every function takes `{ ignores }`: more globs to leave out. To change a rule, add your own config object after the shared ones:

```js
export default [...nodeConfiguration(), { rules: { "no-console": "error" } }];
```

## API

| Import                  | Export                                         | What it contains                                                                                                                                           |
| ----------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `…/node`                | `nodeConfiguration({ ignores? })`              | `@eslint/js` recommended, `typescript-eslint` recommended, Prettier compatibility; ignores `documentation/`, `distribution/`, `coverage/`                  |
| `…/react-library`       | `reactLibraryConfiguration({ ignores? })`      | the Node configuration + `eslint-plugin-react-hooks` recommended (hooks and React compiler rules)                                                          |
| `…/next-js-application` | `nextJsApplicationConfiguration({ ignores? })` | `eslint-config-next` core web vitals and TypeScript, Prettier compatibility; also ignores `.next/`, `test-results/`, `playwright-report/`, `next-env.d.ts` |
| `…/ignore`              | `GENERATED_FOLDERS`, `NEXT_JS_GENERATED`       | the ignore lists above                                                                                                                                     |

## Develop

Tests lint real code with each configuration (`ESLint.lintText`). `pnpm verify` runs formatting, lint, type-check, tests with 100% coverage and the build. Branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## Licence

Licença Sharadox de Código Aberto, versão 0.1.0. See [português](LICENCA.md) (the binding text) and the [English translation](LICENSE.md).

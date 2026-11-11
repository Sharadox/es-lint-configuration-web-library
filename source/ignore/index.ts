/** Folders no Sharadox project lints: generated documentation, builds and test reports. */
export const GENERATED_FOLDERS = ["documentation/**", "distribution/**", "coverage/**"] as const;

/** What Next.js applications also leave out: the Next.js build and Playwright's results. */
export const NEXT_JS_GENERATED = [".next/**", "test-results/**", "playwright-report/**", "next-env.d.ts"] as const;

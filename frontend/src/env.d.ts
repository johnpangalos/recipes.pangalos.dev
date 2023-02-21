/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PROJECT_ID: string;
  readonly DATASET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

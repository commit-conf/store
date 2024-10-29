import { Lang } from "./src/_includes/i18n/index.11ty";

// types.ts
export interface Assets {
  css: string;
  js: {
    main: string[]
  }
}

export interface EleventyDefaults {
  title: string;
  content: string;
  styles: string;
  layout?: string;
  lang: Lang;
  collections: {
    all: any[];
  }
  page: {
    url: string;
    inputPath: string;
    fileSlug: string;
    filePathStem: string;
    outputFileExtension: string;
    templateSyntax: 'ts';
    date: Date;
    outputPath: string;
  }
  eleventy: {
    version: string;
    generator: string;
    env: {
      source: string;
      runMode: string;
      config: string;
      root: string;
    },
    directories: {
      input: string;
      inputFile?: string;
      inputGlob?: string;
      data: string;
      includes: string;
      layouts?: string;
      output: string;
    }
  }
}

export interface Eleventy extends EleventyDefaults {
  assets: Assets;
}

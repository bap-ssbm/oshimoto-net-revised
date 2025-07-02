// src/types/meta.ts
export interface MetaData {
  title: string;
  keywords?: string;
  description: string;
  footerCaption?: string;
}

export interface SiteMetaData {
  [key: string]: MetaData;
}

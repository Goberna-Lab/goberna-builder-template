// Tipos de la PageData que el publish-worker inyecta en data/pages.json.
// Esta es una vista simplificada del schema real de goberna-builder
// (src/types/blocks.ts). Cuando se integre el renderer canónico, este
// archivo se reemplaza por un re-export desde el builder.

export type Block = {
  type: string;
  id?: string;
  // Campos comunes — los handlers concretos hacen narrowing por type.
  text?: string;
  level?: number;
  src?: string;
  alt?: string;
  href?: string;
  variant?: string;
  children?: Block[];
  // El builder agrega muchos más campos (style, responsiveOverrides, etc.)
  // que el placeholder ignora por ahora.
  [key: string]: unknown;
};

export type PageData = {
  blocks?: Block[];
};

export type Page = {
  slug: string;
  title: string;
  data: PageData;
};

export type PagesPayload = {
  pages: Page[];
};

// esto habilita poder importar un archivo
// (una imagen, por ejemplo)
// con los formatos:

// data-url:./logo.png
// bundle-text:./logo.png
// url:./logo.png

// Más info en: https://parceljs.org/features/bundle-inlining/

declare module "bundle-text:*" {
  const value: string;
  export default value;
}

declare module "data-url:*" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

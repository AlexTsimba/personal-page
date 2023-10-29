export default interface ThemedImg {
  src: string;
  alt: string;
  sizes: { height: number; width: number };
  themedBlurHash: { dark: string; light: string };
  backgroundColor?: string;
}

export default interface Img {
  src: string;
  alt: string;
  sizes: { height: number; width: number };
  blurHash: string;
  backgroundColor?: string;
}

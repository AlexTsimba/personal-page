export default interface Project {
  title: string;
  demo?: string;
  coverImage: {
    src: string;
    sizes: { height: number; width: number };
    backgroundColor: string;
    alt: string;
    blurHash: string;
  };
  heroImage: {
    src: string;
    sizes: { height: number; width: number };
    alt: string;
    blurHash: { light: string; dark: string };
  };
}

export default interface Project {
  title: string;
  coverImage: {
    src: string;
    backgroundColor: string;
    alt: string;
    blurHash: string;
  };
  heroImage: {
    src: string;
    alt: string;
    blurHash: { light: string; dark: string };
  };
}

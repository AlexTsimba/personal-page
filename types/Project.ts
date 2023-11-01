export default interface Project {
  id: number;
  coverImage: {
    alt: string;
    src: string;
    sizes: {
      width: number;
      height: number;
    };
    blurHash: string;
    backgroundColor: string;
  };
  heroImage: {
    alt: string;
    src: string;
    sizes: {
      width: number;
      height: number;
    };
    themedBlurHash: { dark: string; light: string };
  };
  links: { href: string; title: string }[];
  toolsBadges: {
    alt: string;
    src: string;
    sizes: {
      width: number;
      height: number;
    };
    blurHash: string;
  }[];
  translations: {
    locale: 'uk' | 'en';
    projectId: string;
    title: string;
    descriptionText: string;
    featuresList: string[];
  }[];
}

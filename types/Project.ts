import Img from './Img';
import ThemedImg from './ThemedImg';

export default interface Project {
  title: string;
  // heroImage: ThemedImg;
  // coverImage: Img;
  description: { title: string; text: string };
  toolsBages: { title: string; list: Img[] };
  images: {
    hero: ThemedImg;
    cover: Img;
  };
  links: {
    title: string;
    list: { href: string; title: string }[];
  };
  features: { title: string; list: string[] };
}

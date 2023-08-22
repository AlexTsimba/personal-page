export interface Dictionary {
  Index: {
    title: string;
  };
  theme: {
    lightMode: string;
    darkMode: string;
    systemMode: string;
  };
  language: {
    flag: string;
    ua: string;
    en: string;
  };
  navLinks: {
    [skills: string]: string;
    contact: string;
    dashboard: string;
    hello: string;
  };
  hello: {
    pageTitle: string;
  };
  skills: {
    pageTitle: string;
  };
  dashboard: {
    pageTitle: string;
  };
  contact: {
    pageTitle: string;
  };
}

type SelectedKeys = 'hello' | 'contact' | 'skills' | 'dashboard';

export type MainDictionary = Pick<Dictionary, SelectedKeys>;

export interface SectionInfo {
  pageTitle: string;
}

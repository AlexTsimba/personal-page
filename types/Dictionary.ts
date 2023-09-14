export default interface Dictionary {
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
    greeting: string;
    name: string;
    position: string;
    location: string;
    cvButtonTitle: string;
    contactButtonTitle: string;
  };
  skills: {
    pageTitle: string;
  };
  dashboard: {
    pageTitle: string;
  };
  contact: {
    pageTitle: string;
    fieldName: string;
    fieldEmail: string;    
    fieldCompany: string;    
    fieldMessage: string;   
    submit: string; 
    errorMessageToShort: string;
    errorInvalidEmail: string;  };
}

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
    uk: string;
    en: string;
  };
  navLinks: {
    [skills: string]: string;
    contact: string;
    projects: string;
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
  projects: {
    pageTitle: string;
    quoteTitle: string;
    quoteAuthor: string;
    invitation: string;
    ghProfile: string;
  };
  contact: {
    pageTitle: string;
    fieldName: string;
    fieldEmail: string;
    fieldCompany: string;
    fieldMessage: string;
    submit: string;
    clear: string;
    errorMessageToShort: string;
    errorMessageToLong500: string;
    errorMessageToLong50: string;
    errorSpecialCharacters: string;
    errorInvalidEmail: string;
    errorMessageisRequired: string;
  };
  contactFormFeedback: {
    titleSuccess: string;
    titleFailed: string;
    bodySuccess: string;
    bodyFailed: string;
    buttonSuccess: string;
    buttonFailed: string;
  };
  contactDetails: {
    title: string;
    description: string;
    proposal: string;
    region: string;
    telephone: string;
    mailto: string;
    currentLocation: string;
  };
}

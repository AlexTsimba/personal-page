export const loadDomAnimationFeatures = () =>
  import('./dom-animation').then((res) => res.domAnimation);

export const loadDomMaxFeatures = () =>
  import('./dom-max').then((res) => res.domMax);

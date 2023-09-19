const plugin = require('tailwindcss/plugin');

const rotateY = plugin(({ addUtilities }) => {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.backface-visability-hidden': {
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
    },
    '.backface-visability-visible': {
      'backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
    },
    '.transform-style-preserve-3d': {
      'transform-style': 'preserve-3d',
      '-webkit-transform-style': 'preserve-3d',
    },
    '.perspective-1000': {
      perspective: '1000px',
    },
  });
});

module.exports = rotateY;

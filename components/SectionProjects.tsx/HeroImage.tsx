// import React, { useState } from 'react';
// import { useTheme } from 'next-themes';
// import { CldImage } from 'next-cloudinary';
// import { Blurhash } from 'react-blurhash';
// import classNames from 'classnames';

// import Project from '@/types/Project';
// import { getImagePath } from '@/lib/utils';
// import { IMAGES_DEVICE_PREVIEWS } from '@/constants/constants';

// interface HeroImageProps {
//   image: Project['heroImage'];
// }

// export default function HeroImage({ image }: HeroImageProps) {
//   const [imageIsReady, setReady] = useState<boolean>(false);
//   const { src, blurHash, alt } = image;
//   const theme = useTheme().resolvedTheme || '';
//   const key = theme === 'dark' ? 'dark' : 'light';
//   const path = getImagePath(IMAGES_DEVICE_PREVIEWS, src, theme);

//   return (
//     <div className="relative h-clamp w-full items-center justify-start marker:flex">
//       <Blurhash
//         hash={blurHash[key]}
//         width="100%"
//         height="100%"
//         resolutionX={32}
//         resolutionY={18}
//         punch={1}
//         className={classNames('transition-all duration-1000', {
//           'opacity-0': imageIsReady,
//         })}
//       />
//       <CldImage
//         className={classNames('transition-all duration-1000', {
//           'opacity-0': !imageIsReady,
//         })}
//         onLoadingComplete={() => setReady(true)}
//         alt={alt}
//         src={path}
//         fill
//         quality={80}
//         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
//         style={{ objectFit: 'cover' }}
//       />
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { CldImage } from 'next-cloudinary';
import { Blurhash } from 'react-blurhash';
import classNames from 'classnames';

import Project from '@/types/Project';
import { getImagePath } from '@/lib/utils';
import { IMAGES_DEVICE_PREVIEWS } from '@/constants/constants';

interface HeroImageProps {
  image: Project['heroImage'];
}

export default function HeroImage({ image }: HeroImageProps) {
  const { src, blurHash, alt } = image;
  const theme = useTheme().resolvedTheme || '';
  const key = theme === 'dark' ? 'dark' : 'light';
  const path = getImagePath(IMAGES_DEVICE_PREVIEWS, src, theme);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  console.log('load');
  return (
    <div className="relative h-fit w-full items-start justify-center marker:flex">
      <CldImage
        className={classNames('transition-all duration-1000', {
          'opacity-0': !isLoaded,
        })}
        onLoadingComplete={() => setIsLoaded(true)}
        alt={alt}
        src={path}
        width={2530}
        height={640}
        sizes="100vw"
        quality={90}
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 ">
        <Blurhash
          hash={blurHash[key]}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={classNames('transition-all duration-1000', {
            'opacity-0': isLoaded,
          })}
        />
      </div>
    </div>
  );
}

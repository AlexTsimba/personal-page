import { useState } from 'react';
import { useTheme } from 'next-themes';
import { CldImage } from 'next-cloudinary';
import { Blurhash } from 'react-blurhash';

import { IMAGES_DEVICE_PREVIEWS } from '@/constants/constants';
import { getImageURL } from '@/lib/utils';
import classNames from 'classnames';
import Project from '@/types/Project';

interface HeroImageProps {
  image: Project['heroImage'];
}

export default function HeroImage({ image }: HeroImageProps) {
  const { src, blurHash, alt, sizes } = image;
  const theme = useTheme().resolvedTheme || '';
  const key = theme === 'dark' ? 'dark' : 'light';
  const path = getImageURL(IMAGES_DEVICE_PREVIEWS, src, theme);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="relative h-fit w-full items-start justify-center marker:flex">
      <CldImage
        className={classNames('transition-all duration-1000', {
          'opacity-0': !isLoaded,
        })}
        onLoadingComplete={() => setIsLoaded(true)}
        alt={alt}
        src={path}
        width={sizes.width}
        height={sizes.height}
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

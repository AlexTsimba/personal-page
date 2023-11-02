import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { CldImage } from 'next-cloudinary';
import { Blurhash } from 'react-blurhash';

import ThemedImg from '@/types/ThemedImg';
import {
  BLURHASH_PUNCH,
  BLURHASH_RESOLUTION_LARGE,
} from '@/lib/constants/constants';
import classNames from 'classnames';

interface ThemedImageProps {
  image: ThemedImg;
}

export default function ThemedImageWithBlur({ image }: ThemedImageProps) {
  const [imageIsReady, setImageIsReady] = useState<boolean>(false);

  const { src, themedBlurHash, alt, sizes } = image;
  const theme = useTheme().resolvedTheme as 'dark' | 'light';
  const path = `${src}-${theme}`;
  const hashRef = useRef<string>(themedBlurHash[theme]);

  return (
    <div className="relative h-fit w-full items-start justify-center marker:flex">
      <CldImage
        className={classNames('transition-opacity duration-0', {
          'opacity-0  duration-1000': !imageIsReady,
        })}
        onLoadingComplete={() => setImageIsReady(true)}
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
          hash={hashRef.current}
          resolutionX={BLURHASH_RESOLUTION_LARGE.x}
          resolutionY={BLURHASH_RESOLUTION_LARGE.y}
          punch={BLURHASH_PUNCH}
          width="100%"
          height="100%"
          className={classNames('transition-opacity duration-1000', {
            'opacity-0 duration-0': imageIsReady,
          })}
        />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { Blurhash } from 'react-blurhash';
import classNames from 'classnames';

import Img from '@/types/Img';
import {
  BLURHASH_RESOLUTION_SMALL,
  BLURHASH_PUNCH,
} from '@/lib/constants/constants';

interface ImageWithBlurProps {
  image: Img;
  type: 'image' | 'badge';
}

export default function ImageWithBlur({ image, type }: ImageWithBlurProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { src, alt, sizes, blurHash } = image;
  const setup = type === 'badge'
      ? { format: 'svg', deliveryType: 'fetch' }
      : { format: 'auto', quality: 99, sizes: '100vw' };

  return (
    <div className="relative flex h-fit w-full justify-center">
      <CldImage
        className={classNames('transition-[opacity] duration-1000', {
          'opacity-0': !isLoaded,
        })}
        onLoadingComplete={() => setIsLoaded(true)}
        src={src}
        alt={alt}
        height={sizes.height}
        width={sizes.width}
        style={{ objectFit: 'cover' }}
        {...setup}
      />
      <div className="absolute inset-0">
        <Blurhash
          hash={blurHash}
          width="100%"
          height="100%"
          resolutionX={BLURHASH_RESOLUTION_SMALL.x}
          resolutionY={BLURHASH_RESOLUTION_SMALL.y}
          punch={BLURHASH_PUNCH}
          className={classNames('transition-[opacity] duration-1000', {
            'opacity-0': isLoaded,
          })}
        />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { Blurhash } from 'react-blurhash';

import { IMAGES_GALLERY } from '@/constants/constants';
import { getImageURL } from '@/lib/utils';
import classNames from 'classnames';
import Project from '@/types/Project';

interface HeroImageProps {
  image: Project['coverImage'];
}

export default function GalleryImage({ image }: HeroImageProps) {
  const [imageIsReady, setReady] = useState<boolean>(false);
  const { src, blurHash, alt, backgroundColor, sizes } = image;
  const path = getImageURL(IMAGES_GALLERY, src);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="relative h-fit w-full items-center justify-start marker:flex">
        <CldImage
          className={classNames('mx-auto transition-all duration-1000', {
            'opacity-0': !imageIsReady,
          })}
          onLoadingComplete={() => setReady(true)}
          alt={alt}
          src={path}
          height={sizes.height}
          width={sizes.width}
          quality={80}
          sizes="100vh"
          style={{ objectFit: 'cover' }}
        />
        <Blurhash
          hash={blurHash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={18}
          punch={1}
          className={classNames(
            'absolute inset-0 transition-all duration-1000',
            {
              'opacity-0': imageIsReady,
            }
          )}
        />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { Blurhash } from 'react-blurhash';
import classNames from 'classnames';

import Project from '@/types/Project';
import { getImagePath } from '@/lib/utils';
import { IMAGES_GALLERY } from '@/constants/constants';

interface HeroImageProps {
  image: Project['coverImage'];
}

export default function GalleryImage({ image }: HeroImageProps) {
  const [imageIsReady, setReady] = useState<boolean>(false);
  const { src, blurHash, alt, backgroundColor } = image;
  const path = getImagePath(IMAGES_GALLERY, src);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="relative h-fit w-full items-center justify-start marker:flex">
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

        <CldImage
          className={classNames('mx-auto transition-all duration-1000', {
            'opacity-0': !imageIsReady,
          })}
          onLoadingComplete={() => setReady(true)}
          alt={alt}
          src={path}
          width={300}
          height={0}
          quality={80}
          sizes="100vh"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

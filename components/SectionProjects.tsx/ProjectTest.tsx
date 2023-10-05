'use client';

import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { IMAGES_DEVICE_PREVIEWS } from '@/constants/constants';
import { getImageSrc } from '@/lib/utils';

interface Props {
  heroImage: string;
}

export default function ProjectTest({ heroImage }: Props) {
  const theme = useTheme().resolvedTheme || '';
  const [imageIsReady, setReady] = useState<boolean>(false);
  const src = getImageSrc(IMAGES_DEVICE_PREVIEWS, heroImage, theme);

  return (
    <div className="overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground">
      <div className="f-full relative h-full">
        <div className="flex h-clamp w-full items-center justify-start">
          {!imageIsReady && (
            <div className="absolute inset-0 bg-red-500">13213</div>
          )}
          <CldImage
            className={classNames({ 'opacity-0': !imageIsReady })}
            onLoadingComplete={() => setReady(true)}
            alt="website mockup on different screens"
            src={src}
            fill
            quality={80}
            sizes="100vh"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      {theme} - theme Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Beatae doloribus reprehenderit omnis libero debitis harum quisquam eveniet
      labore, incidunt repellat nam corporis doloremque earum quia aperiam nihil
      quibusdam esse. Mollitia ullam, obcaecati beatae quae nulla est quod
      temporibus iste, maiores dignissimos fugiat rerum officiis vitae nam harum
      possimus eos reprehenderit?
    </div>
  );
}
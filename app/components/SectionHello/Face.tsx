import Image from 'next/image';

import face from '@/public/images/face.png';

export default function Face() {
  return (
    <div className="self-center pt-20 transition-all duration-300 md:pt-0">
      <div
        style={{ willChange: 'transform' }} // this fixes safari bug, when overflow + border-radius doesn't work together
        className="group/avatar relative overflow-hidden rounded-b-full pt-10 transition-all duration-200 hover:scale-105"
      >
        <Image
          src={face}
          alt="321"
          height={220}
          width={220}
          priority={true}
          className="absolute inset-y-20 max-w-[20rem]  scale-125 transition-transform group-hover/avatar:-translate-y-8 md:duration-300 "
        />
        <svg
          height="220px"
          width="220px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 450 450"
        >
          <g>
            <g>
              <path
                className="fill-accent2"
                d="M225.922,0C101.351,0,0.004,101.347,0.004,225.917s101.347,225.909,225.917,225.909
			            c124.554,0,225.901-101.347,225.901-225.909C451.823,101.347,350.476,0,225.922,0z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

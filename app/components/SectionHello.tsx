import Dictionary from '@/types/Dictionary';
import LottieHeader from './LottieHeader';

interface HelloProps {
  dict: Dictionary['hello'];
}

export default function Hello({ dict }: HelloProps) {
  console.log(dict);
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-around lg:flex-row ">
        <div className="flex flex-col">
          <h1 className=" text-2xl font-semibold">
            Hey 👋🏼 i&apos;m Alex Tsimba
          </h1>
          <p className="text-lg">
            A passionate web-developer, located in Kyiv, Ukraine
          </p>
        </div>
        <div className="w-40 lg:w-80">
          <LottieHeader />
        </div>
      </div>
    </div>
  );
}

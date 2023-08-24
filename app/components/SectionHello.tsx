import Dictionary from '@/types/Dictionary';

interface HelloProps {
  dict: Dictionary['hello'];
}

export default function Hello({ dict }: HelloProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col">
        <h1 className=" bg-black p-20 text-2xl">{dict.pageTitle}</h1>
      </div>
    </div>
  );
}

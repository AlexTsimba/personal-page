import Dictionary from '@/types/Dictionary';

interface ContactProps {
  dict: Dictionary['contact'];
}

export default function Contact({ dict }: ContactProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-red-400">
      <div className="flex flex-col">
        <h1 className=" bg-black p-20 text-2xl">{dict.pageTitle}</h1>
      </div>
    </div>
  );
}

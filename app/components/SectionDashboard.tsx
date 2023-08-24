import Dictionary from '@/types/Dictionary';

interface DashboardProps {
  dict: Dictionary['dashboard'];
}

export default function Dashboard({ dict }: DashboardProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col">
        <h1 className=" bg-black p-20 text-2xl">{dict.pageTitle}</h1>
      </div>
    </div>
  );
}

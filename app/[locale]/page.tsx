import { useTranslations } from 'next-intl';

export default function Home() {
  const text = useTranslations('Index');

  return (
    <main className="flex flex-col items-center justify-between">
      <div>{text('title')}</div>
      <section id='about' className='w-screen h-screen bg-purple-400'>
    <h1>about</h1>
      </section>
      <section id='skills' className='w-full h-screen bg-yellow-400'>
      <h1>skills</h1>
      </section>
      <section id='dashboard' className='w-full h-screen bg-green-400'>
      <h1>dashboard</h1>
      </section>
      <section id='contact' className='w-full h-screen bg-blue-400'>
      <h1>contact</h1>
      </section>
    </main>
  );
}

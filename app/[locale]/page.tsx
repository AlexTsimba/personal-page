import { useTranslations } from 'next-intl';
import Container from './components/Container';
import TestSection from '../testSection';
import Link from 'next/link';

export default function Home() {
  const text = useTranslations('Index');

  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div hidden>{text('title')}</div>
        <TestSection text="skills" className="bg-yellow-400" id="skills" />
        <TestSection text="dashboard" className="bg-green-400" id="dashboard" />
        <TestSection text="contact" className="bg-violet-400" id="contact" />
        <Link href="about">about</Link>
      </Container>
    </main>
  );
}

import Container from '../components/Container';
import Contact from './contact/page';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <Contact />
      </Container>
    </main>
  );
}

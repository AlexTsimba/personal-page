import Container from '../components/Container';
import Hello from './hello/page';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Container className="w-full">
        <Hello />
      </Container>
    </main>
  );
}

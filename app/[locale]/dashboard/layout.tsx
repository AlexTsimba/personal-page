import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AlexTsimba | Dashboard',
  description: 'Personal web page',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

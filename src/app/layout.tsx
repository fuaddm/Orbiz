import type { Metadata } from 'next';
import '@/styles/main.css';
import { Sidebar } from '@/components/molecules/Sidebar';

export const metadata: Metadata = {
  title: 'Orbiz',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

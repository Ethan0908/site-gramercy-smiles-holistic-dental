import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gramercy Smiles Holistic Dental | Manhattan Dentist',
  description:
    'Holistic dental care in Manhattan. Call Gramercy Smiles Holistic Dental at (212) 475-0284 or visit the East 23rd Street office.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

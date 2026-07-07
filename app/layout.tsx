import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gramercy Smiles Holistic Dental | Manhattan Dentist',
  description:
    'Holistic dental care in Manhattan from Gramercy Smiles Holistic Dental, listed at 108 E 23rd St, New York, NY 10010.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: 'Gramercy Smiles Holistic Dental', description: 'dentist • manhattan • 4.9 rating • 587 Google reviews • 108 E 23rd St, New York, NY 10010, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

import { Poppins } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'FitMe',
  description: 'fitness tracker app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className}  bg-primary grid min-h-screen grid-cols-[auto_1fr] justify-center gap-4 `}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

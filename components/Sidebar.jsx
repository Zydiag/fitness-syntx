'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  BiDumbbell,
  BiFoodMenu,
  BiHomeAlt2,
  BiInfoCircle,
  BiSolidDashboard,
} from 'react-icons/bi';
import image from '../public/3.png';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { title: 'Home', icon: BiHomeAlt2, path: '/' },
  { title: 'Dashboard', icon: BiSolidDashboard, path: '/dashboard' },
  { title: 'Diet', icon: BiFoodMenu, path: '/diet' },
  { title: 'Workout', icon: BiDumbbell, path: '/workout' },
  { title: 'About', icon: BiInfoCircle, path: '/about' },
];

const Sidebar = () => {
  const path = usePathname();

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <nav className="bg-light border-x-2  rounded-e-lg  h-screen w-56">
      <div className="flex flex-col gap-10 p-3   h-full">
        <div className="logo flex  items-center">
          <Image src={image} width={50} height={50} className="" alt="" />
          <div className="text-3xl font-bold">FitMe</div>
        </div>
        {navLinks.map((link) => {
          return (
            <Link
              key={link.title}
              className={`${
                path === link.path ? 'bg-accent  shadow shadow-primary' : ''
              }  py-5 pl-5 flex items-center justify-start gap-6 hover:shadow  hover:shadow-primary rounded-md `}
              href={link.path}
            >
              <link.icon className="text-2xl" />
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Sidebar;

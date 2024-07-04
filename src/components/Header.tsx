'use client';
import React from 'react';
import { Logo } from './Logo';
import ToggleTheme from './ToggleTheme';
import Link from 'next/link';
import SearchPost from './SearchPost';

const Header = () => {
  return (
    <header className="flex mt-2 mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="font-naverSemi text-xs grow justify-end items-center flex gap-1 md:gap-3">
        <ToggleTheme />
        <SearchPost />
        <Link
          id="aboutLink"
          href="/about"
          className="text-sm inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;

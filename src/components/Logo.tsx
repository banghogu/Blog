'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-md md:text-[17.5px] whitespace-nowrap font-bold">
      {pathname === '/' ? (
        <span className="font-bold cursor-default pr-2">호진방 블로그</span>
      ) : (
        <Link
          href="/"
          className="font-bold hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          호진방 블로그
        </Link>
      )}
    </span>
  );
}

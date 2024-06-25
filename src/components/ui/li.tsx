'use client';
export function LI({ children }) {
  return (
    <li
      className={`
    my-2
    [ul_&]:relative
    [ul_&]:pl-4
    [ul_&]:before:text-gray-800
    [ul_&]:before:content-['●']
    [ul_&]:before:text-[8px]
    [ul_&]:before:mr-2
    [ul_&]:before:mt-[6px]
    [ul_&]:before:absolute
    [ul_&]:before:-ml-4
  `}
    >
      {children}
    </li>
  );
}

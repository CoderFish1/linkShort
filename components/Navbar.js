import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-blue-500 relative text-white">
      <div className="logo font-extrabold text-xl">Logo</div>
      <ul className="flex gap-8 font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shorten">Shorten</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="p-1 bg-blue-300 text-black rounded-xl">Github</li>
      </ul>
    </div>
  );
};

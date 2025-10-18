import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-blue-500 relative text-white'>
      <div className="logo font-extrabold">Logo</div>
      <ul className='flex gap-8 font-bold'>
        <li><Link href="/">Home</Link></li>
        <li>About</li>
        <li><Link href="/shorten">Shorten</Link></li>
        <li>Contact</li>
        <li className='p-1 bg-blue-300 text-black rounded-xl'>Github</li>
      </ul>
    </div>
  )
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/js.png" alt="" width={128} height={100} />
        <h1>Nexsiz List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/nexsiz">
        <a>Nexsiz Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;

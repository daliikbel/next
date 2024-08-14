import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto">
      <nav className="bg-blue-500 p-5">
        <ul className="flex space-x-5">
        <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Image
        src="/image/image.png" 
        width={250}
        height={200}
        alt="Project"
/>
      <h1>Welcome to my Portfolio</h1>
      <hr></hr>
      <p>I'm a web developer</p>
    </div>
  );
};

export default Home;




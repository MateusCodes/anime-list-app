import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full bg-gray-200 h-14 p-4 flex items-center justify-center'>
      <div className='max-w-[900px] mx-auto text-center'>
        <Link className='text-2xl font-bold text-gray-600 hover:text-gray-900 transition-colors' to="/">MateusCodes® AnimeList</Link>
      </div>
    </header>
  );
};

export default Header;

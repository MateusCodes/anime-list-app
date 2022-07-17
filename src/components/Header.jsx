import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full  h-14 p-3">
      <div className="max-w-[900px] h-full mx-auto flex text-center items-center justify-between">
        <Link
          className="text-2xl font-bold text-gray-600 hover:text-gray-900 transition-colors"
          to="/"
        >
          MateusCodes® AnimeList
        </Link>

        <div className="flex gap-2">
          <a
            className="block"
            target="_blank"
            href="https://www.linkedin.com/in/mateus-sobreira-734433184/"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="block"
            target="_blank"
            href="https://github.com/MateusCodes"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

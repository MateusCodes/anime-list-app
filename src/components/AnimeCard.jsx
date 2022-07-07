import React from 'react';

const AnimeCard = ({ title, coverImg }) => {
  return (
    <div className="bg-gray-300 hover:bg-gray-400 transition-colors rounded-md max-w-[300px] flex flex-col justify-center items-center gap-3 p-3 mx-auto">
      <h1 className="text-xl p-1 text-center bg-gray-400/50 rounded-md">
        {title}
      </h1>
      <img className="rounded-lg block max-w-[200px]" src={coverImg} alt="" />
    </div>
  );
};

export default AnimeCard;

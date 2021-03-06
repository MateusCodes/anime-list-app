import React from 'react';

const AnimeCard = ({ title, coverImg }) => {
  return (
    <div className="bg-slate-100 hover:bg-slate-300 transition-colors rounded-md max-w-[300px] flex flex-col justify-center items-center gap-3 p-3 mx-auto">
      <h1 className="text-xl p-1 text-center max-w-full bg-slate-200 rounded-md">
        {title}
      </h1>
      <img className="rounded-lg block max-w-full" src={coverImg} alt="" />
    </div>
  );
};

export default AnimeCard;

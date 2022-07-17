import React from 'react';
import { useParams } from 'react-router-dom';

const Anime = () => {
  const [anime, setAnime] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    try {
      async function fetchAnime(url) {
        const getData = await fetch(url);
        const jsonData = await getData.json();
        const { data } = jsonData;
        setAnime(data);
      }
      fetchAnime(`https://api.jikan.moe/v4/anime/${id}`);
    } catch (err) {
      console.log('ocorreu um erro');
    } finally {
    }
  }, [id]);

  if (anime === null) return null;
  return (
    <main className="w-full h-full p-4">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 content-center justify-center">
        <div>
          <img
            className="block rounded-xl w-[422px] h-[600px] self-center"
            src={anime.images.jpg.large_image_url}
            alt=""
          />
        </div>
        <div>
          <p className="text-3xl text-center font-bold">
            {anime.title} <br /> Rank N° {anime.rank}
          </p>
          <p className="my-5 text-xl text-center">
            <span className="font-bold">Episodes</span>: {anime.episodes}
          </p>
          <p>
            <span className="font-bold">Synopsis</span>: {anime.synopsis}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Anime;

import React from 'react';
import AnimeCard from './AnimeCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [anime, setAnime] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    async function getData(url) {
      const animeData = await fetch(url);
      const animeJson = await animeData.json();
      const { data } = animeJson;
      setAnime(data);
      setLoading(false);
    }
    getData('https://api.jikan.moe/v4/top/anime');
  }, []);

  if (loading)
    return (
      <div className="w-10 h-10 rounded-full border border-r-transparent border-gray-800 animate-spin absolute left-[50%] top-[50%]"></div>
    );
  if (anime === null) return null;
  return (
    <main className="w-full h-full mt-5">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {anime.map(anime => (
          <Link key={anime.mal_id} to={`animes/${anime.mal_id}`}>
            <AnimeCard
              title={anime.title}
              coverImg={anime.images.jpg.image_url}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;

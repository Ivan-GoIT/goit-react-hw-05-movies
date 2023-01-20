import { useState, useEffect, useRef } from 'react';
import { TreadingListContext } from 'context/treadingContext';
import { fetchData,reformatGenreData } from 'helpers';
import { Header } from 'components/Header/Header';
import { Home } from 'components/Pages/Home/Home';
import { MovieCard } from 'components/Pages/MovieCard/MovieCard';

export const App = () => {
  const [treadingList, setTreadingList] = useState([]);
  const [genresList, setGenresList] = useState({});
  const firstHomeRender = useRef(true);

  const trendingPath = 'trending/movie/day';
  const genrePath = 'genre/movie/list';

  useEffect(() => {
    if (firstHomeRender) {
      fetchData(trendingPath).then(({ data: { results } }) => {
        setTreadingList(results);
      });
      fetchData(genrePath).then(({ data: { genres } }) => {
        setGenresList(reformatGenreData(genres));
      });
      firstHomeRender.current = false;
    }
  }, []);

  return (
    <>
      <Header />
      <TreadingListContext.Provider value={{ treadingList, genresList }}>
        <Home treadingList={treadingList} />
        <MovieCard movieId={0} /> {/* {пока что номер элемента в массиве} */}
      </TreadingListContext.Provider>
    </>
  );
};

import { useState, useEffect, useRef } from 'react';
import { TreadingListContext } from 'context/treadingContext';
import { fetchData,reformatGenreData } from 'helpers';
import { Header } from 'components/Header/Header';
import { Home } from 'components/Pages/Home/Home';
import { MovieCard } from 'components/Pages/Moviss/MovieCard/MovieCard';
import QueryPath from '../../constants/QueryPath'

export const App = () => {
  const [treadingList, setTreadingList] = useState([]);
  const [genresList, setGenresList] = useState({});
  const firstHomeRender = useRef(true);


  useEffect(() => {
    if (firstHomeRender) {
      fetchData(QueryPath.trending).then(({ data: { results } }) => {
        setTreadingList(results);
      });
      fetchData(QueryPath.genres).then(({ data: { genres } }) => {
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
        <MovieCard movieId={76600} /> {/* {пока что номер элемента в массиве} */}
      </TreadingListContext.Provider>
    </>
  );
};

import { useState, useEffect, useRef } from 'react';
import { TreadingListContext } from 'context/treadingContext';
import { fetchData, reformatGenreData } from 'helpers';
import { Header } from 'components/Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import QueryPath from '../../constants/QueryPath';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Header />
        <TreadingListContext.Provider value={{ treadingList, genresList }}>
          <Routes>
          <Route path='' element={ <HomePage treadingList={treadingList} />}/>
          <Route path='/movies' element={ <MoviesPage /> }/>
            
          </Routes>
        </TreadingListContext.Provider>
      </BrowserRouter>
    </>
  );
};

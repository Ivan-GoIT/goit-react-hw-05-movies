import { useState, useEffect, useRef } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';
import { fetchData, parseDataForMovieList } from 'helpers';
import QueryPath from 'constants/QueryPath';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [treadingList, setTreadingList] = useState([]);
  const firstHomeRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    if (firstHomeRender.current) {
      fetchData(QueryPath.trending).then(({ data: { results } }) => {
        const treadingData = parseDataForMovieList(results);
        setTreadingList(treadingData);
      });

      firstHomeRender.current = false;
    }
  }, []);

  return (
    <>
      {!!treadingList.length && (
        <Section title="Trending today">
          <MoviesList moviesList={treadingList} location={location} />
        </Section>
      )}
    </>
  );
};

export default HomePage;

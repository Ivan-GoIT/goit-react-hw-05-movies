import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearhForm } from 'components/SearchForm/SearchForm';
import { Section } from 'components/Section/Section';
import QueryPath from 'constants/QueryPath';
import { fetchData } from 'helpers';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  const onSubmitHandler = fromSearchValue => {
    setSearchParams({ query: fromSearchValue });
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    fetchData(QueryPath.search, query)
      .then(({ data: { results = {} } }) => {
        setMoviesList(results);
      })
      .catch(err => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <Section>
      <>
        <SearhForm onSubmit={onSubmitHandler} />
        {isLoading && !moviesList.length ? (
          <Loader />
        ) : (
          <MoviesList moviesList={moviesList} location={location} />
        )}
      </>
    </Section>
  );
};

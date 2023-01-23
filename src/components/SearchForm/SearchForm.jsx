import css from './SearchForm.module.css';
import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { fetchData } from 'helpers';
import QueryPath from 'constants/QueryPath';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SearhForm = () => {
  const [queryInput, setQueryInput] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams('');
  const query = queryParams.get('query');

  const location = useLocation();

  const onCangeInputHandler = evt =>
    setQueryInput(evt.currentTarget.value.toLowerCase().trim());
  const onSubmitHandler = evt => {
    evt.preventDefault();

    console.log('queryInput',queryInput.length);
    if (!queryInput.length) {
      toast.warn('Enter something to search for');
      return;
    }

    setQueryParams({query:queryInput})
    fetchData(QueryPath.search, query).then(({ data: { results={} } }) => {
      setMoviesList(results);
    }).catch(err=>{
      toast.error('Something wrong')
    });
  };

  return (
    <Section>
      <>
        <form className={css.form} onSubmit={onSubmitHandler}>
          <input
            name="search"
            type="text"
            required
            value={queryInput}
            onChange={onCangeInputHandler}
          />
          <button type="submit">Search</button>
        </form>
        <MoviesList moviesList={moviesList} />
      </>
    </Section>
  );
};

import { useSearchParams } from 'react-router-dom';
import {useState} from 'react'
import { Section } from 'components/Section/Section';
import { fetchData } from 'helpers';
import QueryPath from 'constants/QueryPath';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import css from './SearchForm.module.css';

export const SearhForm = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [queryParams, setQueryParams] = useSearchParams();
  const query = queryParams.get('query') ?? '';


  const onCangeInputHandler = evt => {
    const query = evt.target.value;
    const nextQuery = query !== '' ? { query } : {};
    setQueryParams(nextQuery);
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    setIsLoading (true);
    if (!queryParams.get('query').length) {
      toast.warn('Enter something to search for');
      return;
    }
    fetchData(QueryPath.search, query)
      .then(({ data: { results = {} } }) => {
        onSubmit(results);
      })
      .catch(err => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
    setQueryParams({ query: '' });
  };

  return (
    <Section>
      <>
        <form className={css.form} onSubmit={onSubmitHandler}>
          <input
            name="search"
            type="text"
            required
            value={query}
            onChange={onCangeInputHandler}
          />
          <button type="submit">Search</button>
        </form>
        {isLoading && <Loader />}
      </>
    </Section>
  );
};

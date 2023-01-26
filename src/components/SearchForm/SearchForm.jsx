import { useState } from 'react';
import Section from 'components/Section/Section';
import css from './SearchForm.module.css';
import { toast } from 'react-toastify';

const SearhForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onCangeInputHandler = evt => {
    setQuery(evt.target.value);
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const queryStr = query.trim();
    if (!queryStr.length) {
      toast.warn('Enter something to search for');
      setQuery('');
      return;
    }
    onSubmit(queryStr);
    setQuery('');
  };

  return (
    <Section>
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
    </Section>
  );
};

export default SearhForm;

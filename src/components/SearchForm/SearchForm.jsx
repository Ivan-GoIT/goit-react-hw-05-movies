import css from './SearchForm.module.css'
import { useState } from 'react';
export const SearhForm = () => {
  const [search, setSearch] = useState('');

  return (
    <form className={css.form} >
      <input
      
        name="search"
        type="text"
        required
        value={search}
        onChange={evt => {
          setSearch(evt.currentTarget.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

import css from './SearchForm.module.css';
import { useState } from 'react';
import { Section } from 'components/Section/Section';
export const SearhForm = () => {
  const [search, setSearch] = useState('');

  return (
    <Section>
      <form className={css.form}>
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
    </Section>
  );
};

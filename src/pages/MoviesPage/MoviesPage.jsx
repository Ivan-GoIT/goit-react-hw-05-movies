import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearhForm } from 'components/SearchForm/SearchForm';
import { Section } from 'components/Section/Section';
import { useState } from 'react';

export const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState([])
  const getSearchData =(data)=>{setMoviesList(data)}
  return (
    <Section>
      <>
        <SearhForm onSubmit={getSearchData}/>
        <MoviesList moviesList={moviesList} />
      </>
    </Section>
  );
};

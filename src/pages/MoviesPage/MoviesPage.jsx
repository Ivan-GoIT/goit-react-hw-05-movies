import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearhForm } from 'components/SearchForm/SearchForm';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState([])
  const getSearchData =(data)=>{setMoviesList(data)}
  const location=useLocation();

console.log('MoviesPage location',location);

  return (
    <Section>
      <>
        <SearhForm onSubmit={getSearchData}/>
        {/* <MoviesList moviesList={moviesList} location={location} /> */}
        
      </>
    </Section>
  );
};

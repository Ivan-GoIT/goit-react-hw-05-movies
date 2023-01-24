import {useState,useEffect} from 'react'
import { Section } from 'components/Section/Section';
import { fetchData, imagePath } from 'helpers';
import { Link, Outlet, useParams } from 'react-router-dom';
import QueryPath from '../../constants/QueryPath'
import css from './MovieCard.module.css';

export const MovieCard = () => {
  const [movieObj, setMovieObj] = useState(null)
  const { movieId } = useParams();

  useEffect(() => {
 fetchData(QueryPath.movieDetails(movieId)).then(({data})=>{setMovieObj(data)})
 return setMovieObj(null)
  }, [movieId])
  

  if (!movieObj) return;
  const {
    poster_path,
    title,
    overview,
    genres,
    vote_average,
    release_date,
  } = movieObj;

  return (
    <Section>
      <>
        <button className={css.goBackButton}> Go back</button>
        <div className={css.movie_card}>
          <div className={css.poster}>
            <img src={imagePath(poster_path)} alt={title} />
          </div>
          <div className={css.short_info}>
            <h2 className="short_info__title">
              {title} {'(' + release_date.slice(0, 4) + ')'}
            </h2>
            {!!vote_average && (
              <p>User Score: {Math.round(vote_average * 10)}%</p>
            )}
            <h3>Overview</h3>
            <p>{overview ?? ''}</p>
            <h4>Genres</h4>
            <p>
              {genres.reduce(
                (str, {name}) => str + name + ` `,
                ''
              ) ?? ''}
            </p>
          </div>
        </div>
        <div className={css.additional_info}>
          <h4>Additional information</h4>
          <ul className="info_list">
            <li className="info_list__item">
              <Link to={`cast`}>Cast</Link>
            </li>
            <li className="info_list__item">
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet/>
      </>
    </Section>
  );
};

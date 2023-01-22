import { Section } from 'components/Section/Section';
import { useTreadingListContext } from 'context/treadingContext';
import { imagePath } from 'helpers';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from './MovieCard.module.css';

export const MovieCard = () => {
  const { treadingList, genresList } = useTreadingListContext();
  const { movieId } = useParams();
  if (!treadingList.length) return;
  const {
    poster_path,
    title,
    overview,
    genre_ids,
    vote_average,
    release_date,
  } = treadingList.find(({ id }) => id === Number(movieId));

  return (
    <Section>
      <>
        <button> Go back</button>
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
              {genre_ids.reduce(
                (str, item) => str + genresList[item] + ` `,
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

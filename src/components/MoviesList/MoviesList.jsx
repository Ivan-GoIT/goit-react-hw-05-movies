import css from './MoviesList.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList, title, location }) => {
  return (
    <div className={classNames(css.container, css.movies_list)}>
      <ul className={css.movies_list}>
        {moviesList.map(({ id, title }) => (
          <li key={id} className={css.movies_list__item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

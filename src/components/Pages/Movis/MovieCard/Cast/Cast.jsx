import { useState, useEffect } from 'react';
import QueryPath from 'constants/QueryPath';
import { fetchData, imagePath } from 'helpers';
import css from './Cast.module.css';
// import defaultImg from '../../../../../assets/defaultImg'

// const defaultImgPath = gender =>
//   gender === 1
//     ? defaultImg.femaleDefault
//     : defaultImg.maleDefault;

export const Cast = ({ movieId }) => {
  const [actorsArrey, setActorsArrey] = useState([]);

  useEffect(() => {
    fetchData(QueryPath.movieCredits(movieId)).then(({ data: { cast } }) => {
      setActorsArrey(cast);
    });
  }, [movieId]);
  console.log(actorsArrey);
  return (
    <ul className={css.cast_list}>
      {actorsArrey.map(({ profile_path, name, character, id, gender }) => (
        <li className={css.cast_list__item} key={id}>
          <img src={imagePath(profile_path)} alt={name} />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

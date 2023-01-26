import { useState, useEffect } from 'react';
import QueryPath from 'constants/QueryPath';
import { fetchData, imagePath } from 'helpers';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';

 const Cast = () => {
  const [actorsArrey, setActorsArrey] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchData(QueryPath.movieCredits(movieId)).then(({ data: { cast } }) => {
      setActorsArrey(cast);
    });
  }, [movieId]);
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

export default Cast;

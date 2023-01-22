import { useState, useEffect } from 'react';
import QueryPath from 'constants/QueryPath';
import { fetchData } from 'helpers';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const{movieId}=useParams()

  useEffect(() => {
    fetchData(QueryPath.movieReviews(movieId)).then(({ data: { results } }) => {
      setReviews(results);
    });
  }, [movieId]);
  return (
    <ul className={css.reviews_list}>
      {!!reviews.length?reviews.map(({ author, content, id }) => (
        <li className={css.reviews_list__item} key={id}>
          <h3>Author: {author}</h3> 
          <p>{content}</p>
        </li>
      )):`We don't have any reviews for this movie.`}
    </ul>
  );
};

const QueryPath = {
  trending: 'trending/movie/day',
  genres:'genre/movie/list',
  search: '/search/search-movies',
  movieDetails:(movieId)=>`/movie/${movieId}`,
  movieCredits:(movieId)=>`/movie/${movieId}/credits`,
  movieReviews:(movieId)=>`/movie/${movieId}/reviews`
};

export default QueryPath;

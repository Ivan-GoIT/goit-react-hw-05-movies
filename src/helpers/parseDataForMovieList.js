export const parseDataForMovieList = movieArrey =>
  movieArrey.reduce((resArrey, { id, title }) => {
    resArrey.push({ id, title });
    return resArrey;
  }, []);

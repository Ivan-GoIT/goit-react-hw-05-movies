export const reformatGenreData = genreArray =>
  genreArray.reduce((genreObj, { id, name }) => {
    genreObj[String(id)] = name;
    return genreObj;
  }, {});

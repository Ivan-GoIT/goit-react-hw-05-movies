import axios from 'axios';



const instanseAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '22fa368820f7f9af3c30ea0e6b34461d',
  },
});

export const fetchData =  url => {
  return instanseAxios({
    url,
  })
    .then(({ data, status, statusText }) => ({ data, status, statusText }))
    .catch(err => {
      console.log(err);
    });
};

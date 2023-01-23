import axios from 'axios';
import { toast } from 'react-toastify';

const instanseAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '22fa368820f7f9af3c30ea0e6b34461d',
  },
});

export const fetchData = (url, query) => {
  return instanseAxios({
    url,
    params: { query: query },
  })
    .then(({ data, status, statusText }) => ({ data, status, statusText }))
    .catch(err => {
      toast.error(err);
    });
};

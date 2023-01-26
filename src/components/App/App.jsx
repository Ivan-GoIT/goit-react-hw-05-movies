import { Header } from 'components/Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { Cast } from 'components/MovieCard/Cast/Cast';
import { Reviews } from 'components/MovieCard/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter basename=".github.io/goit-react-hw-05-movies">
        <Routes>
          <Route path="" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieCard />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

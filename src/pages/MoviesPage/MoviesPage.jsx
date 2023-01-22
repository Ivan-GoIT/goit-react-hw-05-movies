import { Cast } from 'components/MovieCard/Cast/Cast';
import { Reviews } from 'components/MovieCard/Reviews/Reviews';
import { Section } from 'components/Section/Section';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { SearhForm } from '../../components/SearchForm/SearchForm';

export const MoviesPage = () => {
  return <Outlet />;
};

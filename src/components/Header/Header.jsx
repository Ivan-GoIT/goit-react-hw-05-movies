import classNames from 'classname'
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <ul className={css.routes}>
        <li className={css.routes__item}>
          <a href="/" className={classNames(css.link_reset,css.link)}>Home</a>
        </li>
        <li className={css.routes__item}>
          <a href="/movies" className={classNames(css.link_reset,css.link)}>Movies</a>
        </li>
      </ul>
    </header>
  );
};

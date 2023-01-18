import css from './Header.module.css'

export  const Header = () => {
  return (
    <header className={css.header}>
      <ul className={css.routes}>
        <li className={css.routes__item}>Home</li>
        <li className={css.routes__item}>Movies</li>
      </ul>
    </header>
  );
};

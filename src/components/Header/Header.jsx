import classNames from 'classnames';
import css from './Header.module.css';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.routes}>
          <li className={css.routes__item}>
            <StyledLink to="/" className={classNames(css.link_reset, css.link)}>
              Home
            </StyledLink>
          </li>
          <li className={css.routes__item}>
            <StyledLink
              to="/movies"
              className={classNames(css.link_reset, css.link)}
            >
              Movies
            </StyledLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

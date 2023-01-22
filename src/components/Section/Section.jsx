import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children, className, title }) => (
  <section className={css[className]}>
    <h2>{title}</h2>
    {children}</section>
);

Section.propTypes = {
  class: PropTypes.string,
  children: PropTypes.element,
};

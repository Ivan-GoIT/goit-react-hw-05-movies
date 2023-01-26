import css from './Section.module.css';
import PropTypes from 'prop-types';

 const Section = ({ children, className, title }) => (
  <section className={css[className]}>
    <h2 className={css.section_title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  class: PropTypes.string,
  children: PropTypes.element,
};

export default Section
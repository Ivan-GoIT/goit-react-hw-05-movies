import { Section } from 'components/Section/Section';
import css from './HomePage.module.css';

export const HomePage = ({ treadingList }) => {
  const onClickHandler = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };
  return (
    <>
      {!!treadingList.length && (
        <Section>
          <div className={css.home}>
            <h1>Trending today</h1>
            <ul className={css.home_list}>
              {treadingList.map(({ id, title }) => (
                <li key={id} className={css.home_list__item}>
                  <a href="" onClick={onClickHandler}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}
    </>
  );
};

import { Section } from 'components/Section/Section';
import css from './Home.module.css';

export const Home = ({treadingList}) => {
  return (
    <>
      {!!treadingList.length && (
        <Section>
          <div className={css.home}>
            <h1>Trending today</h1>
            <ul className={css.home_list}>
              {treadingList.map(item => (
                <li key={item.id} className={css.home_list__item}>
                  <a href="/">{item.original_title}</a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}
    </>
  );
};

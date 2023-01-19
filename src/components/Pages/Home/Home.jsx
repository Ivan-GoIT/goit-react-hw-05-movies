import { Section } from 'components/Section/Section';
import { fetchData } from 'helpers/fetchData';
import { useState, useEffect, useRef } from 'react';
import css from './Home.module.css';

export const Home = () => {
  const [treadingList, setTreadingList] = useState([]);
  const firstHomeRender = useRef(true);

  const trendingPath = 'trending/movie/day';

  useEffect(() => {
    if (firstHomeRender) {
      fetchData(trendingPath).then(({ data: { results } }) => {
        setTreadingList(results);
      });
      firstHomeRender.current = false;
    }
  }, []);

  return (
    <>
      {!!treadingList.length&&
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
      </Section>}
    </>
  );
};

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section';

export const HomePage = ({ treadingList }) => {
  return (
    <>
      {!!treadingList.length && (
        <Section>
          <MoviesList moviesList={treadingList} title="Trending today" />
        </Section>
      )}
    </>
  );
};


import { Section } from "components/Section/Section"
import css from './MovieCard.module.css'
export const MovieCard =({poster_path,title,overview,genre_ids,vote_average})=>{
    return(
        <Section>
            <div className={css.movie_card}>
                <button><- Go back</button>
            </div>
        </Section>
    )
}
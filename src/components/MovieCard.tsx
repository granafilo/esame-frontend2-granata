import type { MovieDetail } from '../types/type';
import { useNavigate } from 'react-router';
import { formatDate, formatRating, POSTER_PATH } from '../utils/utils';

type props = {
    film: MovieDetail,
    key: number
}


function MovieCard({film} : props) {


    const navigate = useNavigate();

    const navigateToFilmDetail = () => {
        navigate(`/movies/${film.id}`)
    }

  return (
        <article className="card">
            {
                !!film.poster_path ? <img className="card__poster" src={`${POSTER_PATH}${film.poster_path}`}/> : <div className="card__poster">Poster</div>
            }
            <div className="card__body">
              <h2 className="card__title">
                {film.title}
              </h2>
              <p className="card__meta">Uscita: {formatDate(film.release_date)} · Voto: {formatRating(film.vote_average)} </p>
              <p className="card__overview">
                {film.overview}
              </p>
              <a className="card__cta" onClick={navigateToFilmDetail}>Dettaglio</a>
            </div>
          </article>
  )
}

export default MovieCard

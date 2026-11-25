import type { MovieDetail } from '../types/type'
import { formatDate, formatRating, POSTER_PATH } from '../utils/utils'

type props = {
    movie: MovieDetail | undefined
}

function MovieDetailCard({movie}: props) {
  return (
    <article className="detail">
        <div>
            { !!movie?.poster_path ? <img className='detail__poster' src={`${POSTER_PATH}${movie.poster_path}`}/> : <div className="detail__poster">Poster</div> }
        </div>
        <div>
            <h1 className="detail__title">
              { !!movie ? movie.title : "Titolo non disponibile" }
            </h1>
            <p className="detail__tagline">"{movie?.tagline}"</p>
            
            <ul className="detail__meta">
                <li>Uscita: {formatDate(movie?.release_date)}</li>
                <li>Durata: {movie?.runtime ? `${movie.runtime} min` : "Non disponibile"}</li>
                <li>Voto: {formatRating(movie?.vote_average)}</li>
                <li>Voti: {movie?.vote_count.toLocaleString('it-IT') ?? "Non disponibile"}</li>
                <li>Stato: {movie?.status}</li>
                <li> Lingua: {movie?.spoken_languages?.[0]?.name || movie?.spoken_languages?.[0]?.english_name || movie?.original_language || "N/D"} </li>
            </ul>
            
            <div className="detail__genres">
                {movie?.genres.map((genere) => {
                    return <span className="genre" key={genere.id}>{genere.name}</span>
                })}
            </div>

            <p className="detail__overview-label">Trama</p>
            <p className="detail__overview">{movie?.overview}</p>

            <p className="card__meta"> 
                Produzione:
                {movie?.production_companies.map((produzione, index: number) => {
                    return <span key={produzione.id}> {produzione.name} {index < movie.production_companies.length-1 ? "·" : ""}</span>
                })}
            </p>
        </div>

    </article>
  )
}

export default MovieDetailCard

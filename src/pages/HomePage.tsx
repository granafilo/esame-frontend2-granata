import { useEffect, useState } from 'react'
import type { MovieDetailSummary, MovieResponse } from '../types/type';
import { getMovieList } from '../api/apiUtils';
import MovieCard from '../components/MovieCard'

function HomePage() {
  const [movieList, setMovieList] = useState<MovieDetailSummary[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  const initializeMovies = async () => {
    try {
      const data: MovieResponse = await getMovieList()
      setMovieList(data.results)
      setIsLoading(false)
      setError(false)
    } catch (err) {
      setError(true)
      console.error("Si è verificato un errore:", err);
    }
  }

  useEffect(() => {
    initializeMovies();
  }, [])

  document.title = "Wireframe - Elenco movies";

  return (
    <main className='main'>
        <h1 className='page-title'>The Lord of the Rings</h1>
        <p className="page-sub">
          Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
          items · senza filtri / paginazione
        </p>

        { !!error ? <><div style={{color: "red"}}>Si è verificato un errore</div><br/><div>Riprovare più tardi</div></> : <></>}
        { !!isLoading ? <><div>Caricamento in corso... </div> <br/> <div>Attendere</div></> : <></>}
        { !!movieList ? <div className="movie-grid"> {movieList.map((movie) => (<MovieCard film={movie} key={movie.id}/>) ) } </div> : <></>}

        <p className="note">
          Wireframe statico. Solo la CTA Dettaglio del primo risultato naviga
          alla pagina di dettaglio.
        </p>
    </main>
  )
}

export default HomePage

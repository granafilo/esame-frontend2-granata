import { useEffect, useState } from 'react'
import type { MovieDetail } from '../../types/type';
import { getMovieList } from '../../api/apiUtils';
import MovieCard from '../MovieCard';

function HomePage() {
  const [movieList, setMovieList] = useState<MovieDetail[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  const initializeMovies = async () => {
    try {
      const data = await getMovieList()
      setMovieList(data)
      setIsLoading(false)
      setError(false)
    } catch (err) {
      setError(true)
      console.error("Si è verificato un errore:", err);
    }
  }

  useEffect(() => {
    document.title = "Wirefram - Elenco movies";
    initializeMovies();
  }, [])

  return (
    <main className='main'>
        <h1 className='page-title'>The Lord of the Rings</h1>
        <p className="page-sub">
          Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
          items · senza filtri / paginazione
        </p>

        {
          !error ? 
            (!isLoading ? 
              ( <div className="movie-grid"> {movieList.map((movie) => (<MovieCard film={movie} key={movie.id}/>) ) } </div>): 
              (<><div>Caricamento in corso... </div> <br/> <div>Attendere</div></>)):
          (<><div style={{color: "red"}}>Si è verificato un errore</div><br/><div>Riprovare più tardi</div></>)
        }

        {
        }

        <p className="note">
          Wireframe statico. Solo la CTA Dettaglio del primo risultato naviga
          alla pagina di dettaglio.
        </p>
    </main>
  )
}

export default HomePage

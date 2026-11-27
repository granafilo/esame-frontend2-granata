import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getMovieDetail } from '../api/apiUtils'
import type { MovieDetail } from '../types/type';
import MovieDetailCard from '../components/MovieDetailCard';

function MovieDetailsPage() {
  const { id } = useParams()

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/")
  }

  const [movie, setMovie] = useState<MovieDetail>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const initializeMovie = async () => {
    try {
      const movieData = await getMovieDetail(parseInt(!!id ? id : ""));
      setMovie(movieData);
      setIsLoading(false);
      setError(false)
    } catch (err) {
      setError(true)
      console.error("Si è verificato un errore:", err);
    }
  }

  if (id) {
    document.title = `Wireframe - Dettaglio movie #${id}`
  }

  useEffect(() => {
    initializeMovie()
  }, [])

  return (
    <main className='main'>
      <a className="back-link" onClick={navigateToHome}>← Torna all’elenco</a>

    { !!error ? <><div style={{color: "red"}}>Si è verificato un errore</div><br/><div>Riprovare più tardi</div></> : <></>}
    { !!isLoading ? (<><div>Caricamento in corso... </div><br/><div>Attendere</div></>) : <></>}
    { !!movie ? (<MovieDetailCard movie={movie}/>) : <></>}

      <p className="note">Wireframe statico.</p>
    </main>
  )
}

export default MovieDetailsPage

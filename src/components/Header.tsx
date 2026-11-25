import { useNavigate } from 'react-router'

const Header = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }

  return (
        <header className="header">
        <div>
          <div className="header__brand">Movie App</div>
        </div>
        <nav className="header__nav">
          <a onClick={navigateToHome}>Home / Elenco</a>
        </nav>
      </header>
  )
}

export default Header

import  "./Nav.css"

const Nav = () => {
  return (
    <header className="header">
        <nav className="nav">
            <h1 className="nav__title">
              Where in the world?
            </h1>
            <figure className="nav__container__icon">
              <i class="uil uil-moon"></i>
              <span className="nav__icon__leyend">Dark mode</span>
            </figure>
        </nav>
    </header>
  )
}

export default Nav
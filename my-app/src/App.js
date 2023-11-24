import './App.css';

let name = "Abhinav"
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtilies</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div classNameName="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Minus repellat iste, officiis reprehenderit vero, cumque incidunt
          laborum cum blanditiis soluta, sapiente odit! Magnam minus magni
          numquam nesciunt consequuntur. Ratione, quas!</p>
      </div>
    </>
  );
}

export default App;

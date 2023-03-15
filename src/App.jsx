import { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const [termino, setTermino] = useState();

  const [page, setPage] = useState(1);

  async function FETCHAPI() {
    const response = await fetch(
      `https://pixabay.com/api/?key=33755447-abaf82bec5bae6799fd85e626&q=${termino}&per_page=32&page=${page}`
    );
    const data = await response.json();
    setImages(data.hits);
    
  }

 
  function siguiente () {
    setPage(page + 1)
    FETCHAPI()
    scrollTo(top)
  }

  function anterior () {
    setPage(page - 1)
    if(page === 1) return null
    FETCHAPI()
    scrollTo(top)

  }


  return (
    <div className="App">
      <div className="container">
        <form className="row bg-dark p-4 mb-4" >
          <h1 className="text-center text-white py-4">Buscador de imagenes</h1>
          <div className="form-group col-md-8">
            <input
              type="text"
              placeholder="busca tu imagen"
              onChange={(e) => setTermino(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="form-group col-md-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                FETCHAPI();
              }}
              className="btn btn-lg d-block btn-danger"
            >
              Buscar
            </button>
          </div>
        </form>

        <div className="container ">
          <div className="row ">
            {images.map((image) => {
              return (
                <div
                  key={image.id}
                  className=" text-center col-12 col-sm-6 col-md-4 col-lg-3 mb-4 "
                >
                  <div className="card bg-dark text-white ">
                    <img
                      src={image.previewURL}
                      alt=""
                      className="card-img-top "
                    />
                    <div className="card-body">
                    <p className="card-text"><span className="badge badge-info">{image.views}</span> Vistas</p>
                    <p className="card-text"><span className="badge badge-info">{image.comments} </span>Comentarios</p>
                    <p><span className="badge badge-info">{image.downloads}</span> Descargas</p>
                    <a
                      href={image.largeImageURL}
                      className="btn btn-primary d-block"
                      target="_blank"
                    >
                      Ver imagen completa
                    </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-4">
        <button 
        onClick={anterior}
        className="btn btn-primary">&larr; Anterior</button>
        <button 
        onClick={siguiente} 
        className="btn btn-primary">Siguiente &rarr;</button>
    </div>
    </div>
  );
}

export default App;

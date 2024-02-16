import React, { useState, useEffect } from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';

const MarvelView = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const [paginationSize, setPaginationSize] = useState(10);
    const [formatComic, setFormatComic] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchMarvelComics = async () => {
      try {
          // Fetch movies
          const moviesResponse = await fetch(`http://localhost:8000/api/comics?page=${page}&pagination_size=${paginationSize}&comicType=${formatComic}`);
          const moviesData = await moviesResponse.json();
          console.log(moviesData.data.results)
          setMovies(moviesData.data.results);

          setLoading(false);
        } catch (error) {
          console.error('Error fetching data movies:', error);
          setLoading(false);
        }
    };

    useEffect(() => {

      fetchMarvelComics();
    }, []);

    const handlePageChange = (newPage) => {
      fetchMarvelComics();
      setLoading(true);
      setPage(newPage);
    };

    const handlePaginationSizeChange = (newSize) => {
      setPaginationSize(newSize);
      setPage(1); // Reinicia la página a 1 cuando cambia el tamaño de la paginación
    };

    const items = [...Array(10).keys()].map((number) => (
      <Pagination.Item key={number} active={number + 1 === page} onClick={() => handlePageChange(number + 1)}>
        {number + 1}
      </Pagination.Item>
    ));

    const handleSaveChanges = () => {
      setLoading(true);
      fetchMarvelComics();
      handleClose();
    };


    return (
      <Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtros de búsqueda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select value={page} aria-label="Rango" onChange={(e) => handlePaginationSizeChange(e.target.value)}>
            <option>Selecciona un rango</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Form.Select>

          <Form.Select value={formatComic} className='mt-5' aria-label="Tipo de comic" onChange={(e) => setFormatComic(e.target.value)}>
            <option>Selecciona un rango</option>
            <option value="comic">Comic</option>
            <option value="magazine">Magazine</option>
            <option value="trade paperback">trade Paperback</option>
            <option value="hardcover">Hardcover</option>
            <option value="digest">Digest</option>
            <option value="graphic novel">Graphic novel</option>
            <option value="digital comic">Digital comic</option>
            <option value="infite comic">Infite comic</option>
          </Form.Select>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

        <div>
          <div className='row'>

            <button onClick={handleShow} type="button" className="btn btn-danger">Filtros</button>

            <div className="d-flex justify-content-center align-items-center mt-5">
              <Pagination>{items}</Pagination>
            </div>

            <h2 className='text-white'>Lista de Cómics</h2>
            { loading ? (
              <div className='d-flex flex-column justify-content-center align-items-center text-white mt-5'>
                <h2 className=' text-white'>Cargando comics</h2>
                <Spinner variant="danger" className='justify-content-center align-items-center mt-5' animation="border" />
              </div>
            ) : (
              <div
            className='row gap-2 mt-2'>
              {loading && <p className='text-white'>Cargando cómics...</p>}
              {!loading &&
              movies.map((comic) => (
                <Col key={comic.id} >
                  <div className="card bg-dark" style={{width: '15rem', height: '30rem'}}>
                    <img style={{  width: '300px', height: '300px' }} className="img-fluid" src={comic.thumbnail ? comic.thumbnail.path + '.' + comic.thumbnail.extension : imgNotFound} alt={comic.title} />
                    <div className="card-body text-break">
                      <h5 className="card-title text-danger text-break">{comic.title || 'No title'}</h5>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            ) }


          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <Pagination>{items}</Pagination>
          </div>
        </div>



      </Container>
    );
}

export default MarvelView;

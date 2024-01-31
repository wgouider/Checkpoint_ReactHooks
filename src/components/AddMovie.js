import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMovie = ({add})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Initialisation des champs de saisie du formulaire   
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    trailer: '',
    rate: ''
  });
  
  // Fonction qui permet de maintenir dynamiquement l'état newMovie à jour avec les valeurs actuelles des champs de saisie du formulaire 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value
      
    });
  
};


  //cette fonction handleSubmit est utilisée pour gérer la soumission du formulaire d'ajout de films.
    const handleSubmit = (e) => {
      setNewMovie({
        title: '',
        description: '',
        posterUrl: '',
        trailer: '',
        rate: '',
      });
      
      add(newMovie);
      handleClose();
    };
  
    return (

    <form onSubmit={handleSubmit}>
      <Button  style={{marginRight:'5px', padding:"5px",  }} variant="primary" onClick={handleShow}> Add New Movie </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Title</Form.Label> <Form.Control type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput2">
              <Form.Label>Description</Form.Label> <Form.Control type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput3">
              <Form.Label>Poster URL</Form.Label> <Form.Control type="text" name="posterUrl" placeholder="Poster URL" value={newMovie.posterUrl} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput4">
              <Form.Label>Trailer</Form.Label> <Form.Control type="text" name="trailer" placeholder="Trailer" value={newMovie.trailer} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput5">
              <Form.Label>Rate</Form.Label> <Form.Control type="number" name="rate" placeholder="Rate" value={newMovie.rate} onChange={handleChange} min="0" max="5" step="1" required autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          <Button variant="danger" onClick={()=>handleSubmit()} > Add New Movie </Button>
        </Modal.Footer>
      </Modal>
    </form>

  );
}

export default AddMovie;
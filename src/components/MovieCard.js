import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import "./MovieCard.css";
import { Button, Modal } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <CardGroup class="Card">
      <Card style={{ width: "20rem", height: "50rem", margin: "20px" }}>
        <Card.Img
          style={{ width: "20rem", height: "30rem" }}
          variant="top"
          src={movie.posterUrl}
          alt={movie.name}
        />
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              margin: "5px",
            }}
          >
            {movie.title}
          </Card.Title>
          <Card.Text
            style={{ textAlign: "left", width: "18rem", height: "10rem" }}
          >
            <p>Description: {movie.description}</p>
          </Card.Text>

          <Card.Text>
            {/* <p>Trailer: {movie.trailer}</p> */}
            <p>Rate: {movie.rate}</p>
          </Card.Text>

          <Button variant="danger" onClick={handleModalShow}>
            Trailer
          </Button>
        </Card.Body>
      </Card>
      <Modal
        className="modal-dialog modal-lg"
        show={showModal}
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{movie.description}</p>
          <iframe
            width="750"
            height="500"
            src={movie.trailer}
            title="My App video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </CardGroup>
  );
};

export default MovieCard;

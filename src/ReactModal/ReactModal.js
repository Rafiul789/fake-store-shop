import React,{useState} from 'react';
import {Button,Modal} from "react-bootstrap";

const ReactModal = (props) => {
const{title,image,price,description}=props.product
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        
             <>
      <Button variant="primary" onClick={handleShow}>
       Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <img className="w-50"  src={image} alt=""></img>
        <Modal.Body>{description} <h2>price={price}$ </h2>  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    );
};

export default ReactModal;
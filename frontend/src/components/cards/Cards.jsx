import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Cards.css';

export default function RenderCards({ cardData, prefs, primaryGoal }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardOptions, setCardOptions] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const getOptions = (task) => {
    fetch("/api/options", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: task.choices[0].message,
        personalization: prefs,
        primary_goal: primaryGoal,
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      setCardOptions(data);
      console.log(data);
    }).catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="row g-5 align-items-start mx-auto">
      {cardData.map((item, index) => (
        <div key={index} className="col-lg-3 col-sm-6 mx-auto">
          <div
            className="card text-light text-center mx-auto ratio ratio-16x9 shadow"
            onClick={() => {
              handleCardClick(item);
              getOptions(item);
            }}
          >
            <div className="card-body d-flex">
              <p className="card-text mx-auto my-auto">{item.choices[0].message}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg" fullscreen='lg-down' className="text-white" >
        <Modal.Header className='ps-4' closeButton>
          <Modal.Title >{selectedCard && (
            <p>
              {selectedCard.choices[0].message}
            </p>
          )}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cardOptions && (
            <p>{cardOptions[0].description}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="dark" onClick={handleCloseModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

RenderCards.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          message: PropTypes.string.isRequired,
          // Add other prop types for choices as needed
        })
      ).isRequired,
      // Add other prop types for cardData as needed
    })
  ).isRequired,
};

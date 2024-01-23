import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Cards.css';

export default function RenderCards({ cardTasks, prefs, primaryGoal }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardOptions, setCardOptions] = useState(null);
  const [history, setHistory] = useState({ sub_task: '', selected_options: [] })

  const handleCardClick = (task) => {
    setSelectedCard(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const handleSave = () => {
    setHistory({
      sub_task: selectedCard.choices[0].message,
      selected_options: cardOptions.filter(option => option.selected).map(option => option.label),
    });
    handleCloseModal();
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
    }).catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="row g-5 align-items-start mx-auto">
      {cardTasks.map((subTask, index) => (
        <div key={index} className="col-lg-3 col-sm-6 mx-auto">
          <div
            className="card text-light text-center mx-auto ratio ratio-16x9 shadow"
            onClick={() => {
              handleCardClick(subTask);
              getOptions(subTask);
            }}
          >
            <div className="card-body d-flex">
              <p className="card-text mx-auto my-auto">{subTask.choices[0].message}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl" fullscreen='lg-down' className="text-white" >
        <Modal.Header closeButton>
          <Modal.Title className='text-light mx-auto'>
            {selectedCard && selectedCard.choices[0].message}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className='fst-italic'>Primary option:</h6>
          <ul className="list-group">
            <li className="list-group-item border border-0 ">
              <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
              <label className="form-check-label stretched-link ms-3 text-white" htmlFor="firstCheckbox">{
                cardOptions && cardOptions[0]
              }</label>
            </li>
            <hr />
            <h6 className='fst-italic'>Secondary options:</h6>
            {cardOptions && cardOptions.slice(1).map((option, index) => (
              <li key={index} className="list-group-item border border-0">
                <input className="form-check-input me-1" type="checkbox" value="" id={`checkbox${index}`}/>
                <label className="form-check-label stretched-link ms-3 text-white" htmlFor={`checkbox${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

RenderCards.propTypes = {
  cardTasks: PropTypes.arrayOf(
    PropTypes.shape({
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          message: PropTypes.string.isRequired,
          // Add other prop types for choices as needed
        })
      ).isRequired,
      // Add other prop types for cardTasks as needed
    })
  ).isRequired,
};

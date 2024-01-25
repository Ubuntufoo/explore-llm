// This file renders cards on page. It contains the modal that pops up on click. The modal contains the options for the card, which are fetched from the backend. The save button stores the options in the history context.
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function RenderCards({ cardTasks, prefs, primaryGoal, setOptionsHistoryCallback }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardOptions, setCardOptions] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  console.log("cards.jsx state for selectedOptions:", selectedOptions)

  const handleCardClick = (task) => {
    setSelectedCard(task);
    setShowModal(true);
    getOptions(task);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const getOptions = (task) => {
    fetch("/api/options", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task,
        personalization: prefs,
        primary_goal: primaryGoal,
      }),
    })
      .then((response) => response.json())
      .then((data) => setCardOptions(data))
      .catch((error) => console.error('Error:', error));
  };

  // add card:option to selectedOptions object
  const handleCheckboxChange = (option, card) => {
    setSelectedOptions((prevState) => {
      const newState = { ...prevState };
      if (newState[card] && newState[card].includes(option)) {
        newState[card] = newState[card].filter((el) => el !== option);
      } else {
        newState[card] = newState[card] ? [...newState[card], option] : [option];
      }
      return newState;
    });
  };

  const handleSave = () => {
    setOptionsHistoryCallback({
      primary_goal: primaryGoal,
      selected_options: selectedOptions,
    });
    handleCloseModal();
  };

  return (
    <div className="row g-5 align-items-start mx-auto">
      {cardTasks.map((subTask, index) => (
        <div key={index} className="col-lg-3 col-sm-6 mx-auto">
          <div
            className="card text-light text-center mx-auto ratio ratio-16x9 shadow"
            onClick={() => handleCardClick(subTask)}
          >
            <div className="card-body d-flex">
              <p className="card-text mx-auto my-auto">{subTask}</p>
            </div>
          </div>
        </div>
      ))}
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl" fullscreen='lg-down' className="text-white">
        <Modal.Header closeButton>
          <Modal.Title className='text-light mx-auto'>
            {selectedCard && selectedCard}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className='fst-italic'>Recommended:</h6>
          <ul className="list-group">
            <li className="list-group-item border border-0">
              <input
                className="form-check-input me-1"
                type="checkbox"
                // checked is true if selectedOptions includes the first option as a value for the selectedCard key
                checked={selectedOptions[selectedCard] && selectedOptions[selectedCard].includes(cardOptions && cardOptions[0])}
                onChange={() => handleCheckboxChange(cardOptions && cardOptions[0], selectedCard)}
                id="firstCheckbox"
              />
              <label className="form-check-label stretched-link ms-3 text-white" htmlFor="firstCheckbox">
                {cardOptions && cardOptions[0]}
              </label>
            </li>
            <hr />
            <h6 className='fst-italic'>Secondary options:</h6>
            {cardOptions &&
              cardOptions.slice(1).map((option, index) => (
                <li key={index} className="list-group-item border border-0">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    // checked is true if selectedOptions includes the option as a value for the selectedCard key
                    checked={selectedOptions[selectedCard] && selectedOptions[selectedCard].includes(option)}
                    onChange={() => handleCheckboxChange(option, selectedCard)}
                    id={`checkbox${index}`}
                  />
                  <label className="form-check-label stretched-link ms-3 text-white" htmlFor={`checkbox${index}`}>
                    {option}
                  </label>
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
  cardTasks: PropTypes.array.isRequired, // Array of card tasks is required
  prefs: PropTypes.string.isRequired, // Preferences string is required
  primaryGoal: PropTypes.string.isRequired, // Primary goal string is required
  setOptionsHistoryCallback: PropTypes.func.isRequired, // Callback function is required
};




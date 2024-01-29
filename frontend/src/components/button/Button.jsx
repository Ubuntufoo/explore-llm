// this is the button component that makes the summarization API call
import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

export default function Button({ resetOptionsHxCallback, optionsHistory }) {

  const [summary, setSummary] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleResetClick = () => {
    resetOptionsHxCallback([]);
  };

  const sendSummary = () => {
    fetch("/api/summarize", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        primary_goal: optionsHistory.primary_goal,
        history: optionsHistory.selected_options,
      }),
    })
      .then((response) => response.json())
      .then((data) => setSummary(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="text-center">
      <button
        type="button" className="btn btn-lg btn-dark w-50 mt-4"
        onClick={() => { sendSummary(); handleShow(); handleResetClick() }}
      >
        Summarize
      </button>
      {summary && (
        <Modal
          centered size="xl" fullscreen='lg-down' className="text-white" show={show} onHide={handleClose}
        >
        <Modal.Body className='my-5'>
            {summary}
        </Modal.Body>
      </Modal>
        )}
    </div>
  );
}

Button.propTypes = {
  resetOptionsHxCallback: PropTypes.func.isRequired,
  optionsHistory: PropTypes.shape({
    primary_goal: PropTypes.string,
    selected_options: PropTypes.object
  }).isRequired,
};



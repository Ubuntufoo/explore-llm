// Renders the input field and button for the user to enter their primary goal and optional preferences.

import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Input.css';
import PropTypes from 'prop-types';

export default function Input({ setGetDecompCallback }) {
  const [inputValuePrimary, setInputValuePrimary] = useState('');
  const [inputValuePrefs, setInputValuePrefs] = useState('');

  const getDecomp = () => {
    fetch("/api/decomposition", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        primary_goal: inputValuePrimary,
        personalization: inputValuePrefs
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      setGetDecompCallback(data, inputValuePrimary, inputValuePrefs);
    }).catch(error => {
      console.error('Error:', error);
    });
  };

  const handleInputChangePrimary = (e) => {
    setInputValuePrimary(e.target.value);
  };

  const handleInputChangePrefs = (e) => {
    setInputValuePrefs(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getDecomp();
    }
  };

  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-11 offset-1">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control text-center border border-5 border-black"
              placeholder="Explore an idea"
              aria-label="Explore an idea"
              aria-describedby="button-addon2"
              value={inputValuePrimary}
              onChange={handleInputChangePrimary}
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-dark explore" type="button" id="button-addon2" onClick={getDecomp}>Explore</button>
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Tooltip id={`tooltip`} className=''>
                  <p>
                    <h5>To use this app:</h5>
                    <br />
                    Enter an idea or task you want to explore and it will decompose the task into sub-tasks. Optionally provide preferences.
                    <br />
                    <br />
                    Several options are listed within each sub-task; when you&apos;ve customized your options press &quot;summarize&quot; to see a final report.
                  </p>
                </Tooltip>
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" className="bi bi-info-circle ps-3 my-auto" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 offset-md-7">
            <div>
              <input
                type="text"
                className="form-control text-center fst-italic"
                placeholder="Optional preferences"
                aria-label="Optional preferences"
                value={inputValuePrefs}
                onChange={handleInputChangePrefs}
                onKeyPress={handleKeyPress}
              />
            </div>
        </div>
      </div>
    </div>
  );

}

Input.propTypes = {
  setGetDecompCallback: PropTypes.func.isRequired,
};

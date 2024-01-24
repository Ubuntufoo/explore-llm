import { useState } from 'react';
import PropTypes from 'prop-types';
export default function Input({ setFirstReqCallback }) {
  const [inputValuePrimary, setInputValuePrimary] = useState('');
  const [inputValuePrefs, setInputValuePrefs] = useState('');


  const getFirstReq = () => {
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
      setFirstReqCallback(data, inputValuePrimary, inputValuePrefs);
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
      getFirstReq();
    }
  };

  return (
    <div className="input-group input-group-lg text mx-auto">
      <input
        type="text"
        className="form-control text-center border border-5 border-black"
        placeholder="Brainstorm an idea"
        aria-label="Brainstorm an idea"
        aria-describedby="button-addon2"
        value={inputValuePrimary}
        onChange={handleInputChangePrimary}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-dark" type="button" id="button-addon2" onClick={getFirstReq}>Go</button>
      <input
        type="text"
        className="form-control text-center border border-5 border-black fst-italic"
        placeholder="Your optional preferences"
        aria-label="Your optional preferences"
        value={inputValuePrefs}
        onChange={handleInputChangePrefs}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

Input.propTypes = {
  setFirstReqCallback: PropTypes.func.isRequired,
};

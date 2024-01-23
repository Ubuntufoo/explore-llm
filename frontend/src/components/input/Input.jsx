import { useState } from 'react'
import { FirstReqContext } from '../../contexts/FirstReqContext'

export default function Input() {
  const [firstReq, setFirstReq] = useState(null)

  const getFirstReq = () => {
    fetch("/api/decomposition", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      return response.json();
    }).then(data => {
      setFirstReq(data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <FirstReqContext.Provider value={firstReq}>
      <div className="input-group input-group-lg text mx-auto my-5">
        <input type="text" className="form-control text-center border border-5 border-black " placeholder="Brainstorm an idea" aria-label="Brainstorm an idea" aria-describedby="button-addon2" />
        <button className="btn btn-dark" type="button" id="button-addon2" onClick={getFirstReq}>Go</button>
        <input type="text" className="form-control text-center border border-5 border-black fst-italic" placeholder="Your optional preferences" aria-label="Server"></input>
      </div>
    </FirstReqContext.Provider>
  );
}
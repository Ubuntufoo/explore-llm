// Parent component of application
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/cards/Cards';
import Button from './components/button/button';
import Input from './components/input/Input';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [subTasks, setSubTasks] = useState(null);
  const [inputValuePrimary, setInputValuePrimary] = useState('');
  const [inputValuePrefs, setInputValuePrefs] = useState('');
  const [optionsHistory, setOptionsHistory] = useState({});

  const setGetDecompCallback = (data, primary, prefs) => {
    setSubTasks(data);
    setInputValuePrimary(primary);
    setInputValuePrefs(prefs);
  };

  const setOptionsHistoryCallback = (optionsHistory) => {
    setOptionsHistory(optionsHistory);
  }

  const resetOptionsHxCallback = () => {
    setOptionsHistory([]);
  }

  return (
    <div className="container">
      <Input setGetDecompCallback={setGetDecompCallback} />
      <h4>
        {inputValuePrimary && !subTasks ? (
            <div className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '47%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Spinner animation="grow" variant="dark" className='mx-auto text-center' />
          </div>
        ) : (
          inputValuePrimary && (
            <div className='mx-auto text-center py-4 display-6 fs-1 fw-bold'>{inputValuePrimary}</div>
          )
        )}
      </h4>
      {subTasks && (<Cards setOptionsHistoryCallback={setOptionsHistoryCallback} cardTasks={subTasks} prefs={inputValuePrefs} primaryGoal={inputValuePrimary} />)}
      <hr className="mt-5 border border-5" />
      <Button optionsHistory={optionsHistory} resetOptionsHxCallback={resetOptionsHxCallback} />
    </div>
  );
}

export default App;

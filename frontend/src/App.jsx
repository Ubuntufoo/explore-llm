// Main component of the application
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/cards/Cards';
import Button from './components/button/button';
import Input from './components/input/Input';

function App() {
  const [subTasks, setSubTasks] = useState(null);
  const [inputValuePrimary, setInputValuePrimary] = useState('');
  const [inputValuePrefs, setInputValuePrefs] = useState('');
  const [optionsHistory, setOptionsHistory] = useState([]);

  console.log("app.jsx optionsHistory object:",optionsHistory)


  const setFirstReqCallback = (data, primary, prefs) => {
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
      <Input setFirstReqCallback={setFirstReqCallback} />
      <h4>
        {inputValuePrimary
          ?
          (
            <div className='mx-auto text-center py-4 display-6 fs-2'>{inputValuePrimary}</div>
          )
          : <div className='my-5'></div>
        }
      </h4>
      {subTasks && (<Cards setOptionsHistoryCallback={setOptionsHistoryCallback} cardTasks={subTasks} prefs={inputValuePrefs} primaryGoal={inputValuePrimary} />)}
      <hr className="mt-5 border border-5" />
      <Button optionsHistory={optionsHistory} resetOptionsHxCallback={resetOptionsHxCallback} />
    </div>
  );
}

export default App;

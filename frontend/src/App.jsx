import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/cards/Cards';
import Button from './components/button/button';
import Input from './components/input/Input';

function App() {
  const [subTasks, setSubTasks] = useState(null);
  const [inputValuePrimary, setInputValue] = useState('');
  const [inputValuePrefs, setInputValuePrefs] = useState('');

  const setFirstReqCallback = (subTasksResp, inputValuePrimary, inputValuePrefs) => {
    setSubTasks(subTasksResp);
    setInputValue(inputValuePrimary);
    setInputValuePrefs(inputValuePrefs);
  };

  return (
    <div className="container">
      <Input setFirstReqCallback={setFirstReqCallback} />
      <h4>
        {inputValuePrimary
          ?
          (
            <div className='mx-auto text-center py-4 my-2'>{inputValuePrimary}</div>
          )
          : <div className='my-5'></div>
        }
      </h4>
      {subTasks && (<Cards cardTasks={subTasks} prefs={inputValuePrefs} primaryGoal={inputValuePrimary} />)}
      <hr className="mt-5 border border-5" />
      <Button />
    </div>
  );
}

export default App;

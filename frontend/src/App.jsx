import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cards from './components/cards/Cards'
import Button from './components/button/button';
import Input from './components/input/Input'

import { FirstReqContext } from './contexts/FirstReqContext'


function App() {
  const firstReq = useContext(FirstReqContext);

  return (
    <div className="container my-5">
      <Input />
      {firstReq}
      <Cards />
      <hr className="mt-5 border border-5" />
      <Button />
    </div>
  )
}

export default App

import { useState } from 'react';

import './App.css';
import api from './Api/Api.js';

import Ballot from './Components/Ballot/Ballot';
import Modal from './Components/Modal/Modal';


function App() {
  const [buttonModal, setModal] = useState(false);

  const ballotsData = api.getBallotData();
  const ballots = [];

  ballotsData.items.forEach((category, index) => {
    ballots.push(
      <Ballot id={category.id} name={category.title} setTrigger={ ()=>setModal(true) } nominees={category.items}/>
    )
  });

  return (
    <div className="App">
      <div>Awards 2021</div>
      <br/>
      {ballots}

      <button onClick={ ()=>setModal(true) } style={{
        alignContent: 'center',
        backgroundColor: 'gold',
        color: 'white',
        display: 'flex',
        height: '100px',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: '10px',
        fontSize: '36px',
        flexDirection: 'column',
      }}>SUBMIT BALLOT</button>

      <Modal buttonModal={buttonModal} setModal={setModal}>
        <h1>Success</h1>
      </Modal>
    </div>
  );
}

export default App;

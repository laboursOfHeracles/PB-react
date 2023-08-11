import React from 'react';
import Nominee from '../Nominee/Nominee';

import { useState } from 'react';

const Ballot = (props) => {
  const [pick, setPick] = useState(0);

  const nominees = props.nominees.map(n=>
    <Nominee name={n.title} avatar={n.photoUrL} pick={pick} setTrigger={setPick}/>
  )

  return (
    <div style={{
        backgroundColor: '#FFF',
        height: '400px',
        margin: 'auto',
        width: '50%',
      }}
      className='ballot'>
      <table style={{
        margin: 'auto',
        tableLayout: 'fixed',
        width: '100%',
      }}>
        <thead style={{
          backgroundColor: 'gray',
          textAlign: 'left',
        }}
        >
          <tr><th colSpan="3">{props.name}</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding:'10px 10px 10px 10px',}}> {nominees[0]} </td>
            <td style={{padding:'10px 10px 10px 10px',}}> {nominees[1]} </td>
            <td style={{padding:'10px 10px 10px 10px',}}> {nominees[2]} </td>
          </tr>
          <tr>
            <td style={{padding:'10px 10px 10px 10px',}}> {nominees[3]} </td>
            <td style={{padding:'10px 10px 10px 10px',}}> {nominees[4]} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Ballot;
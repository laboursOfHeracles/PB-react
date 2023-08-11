import React from 'react';

import {useEffect} from 'react';

const Modal = (props) => {
  // closes modal with ESC keypress
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === 'Escape') props.setModal(false)
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [props])

  if(!props.buttonModal)return "";

  return (
    <div className="modal" style={{
      alignItems: 'center',
      backgroundColor: '#77777777',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      left: 0,
      position: 'fixed',
      top: 0,
      width: '100%',
    }}>
      <div className="modal-inner" style={{
        backgroundColor: '#FFF',
        padding: '32px',
        position: 'relative',
        maxWidth: '640px',
        width: '100%',
      }}>
        <button onClick={ ()=>props.setModal(false) } className="close-modal" style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
        }}>X</button>
        {props.children}
      </div>
    </div>
  )
}


export default Modal

import React from 'react';

const Nominee = (props) => {
  const defaultTextColor = '#000';
  const hoverTextColor = '#777';

  return (
    <div style={{
        backgroundColor: props.name === props.pick ? "#009B86" : '#AFD9EE',
        border: '1px solid black',
        color: defaultTextColor,
        height: '50%',
        width: '100%',
      }}
      className='nominee'
      onMouseOut={e => (e.target.style.color = defaultTextColor)}
      onMouseOver={e => (e.target.style.color = hoverTextColor)}
    >
      <div style={{
        height: '40px',
      }}>{props.name}</div>
      <div>
        <img
            alt={props.name}
            style={{
                borderRadius:'80px',
                height: '80px',
                width: '80px',
            }}
            src={props.avatar}
        />
      </div>
      <button onClick={() => props.setTrigger(props.name) }>
        Select
      </button>
    </div>
  )
}

export default Nominee;
import React, { useState } from 'react';
import { Button } from 'react95';
import ModalWindow from './ModalWindow';

export default function DesktopIcon({ iconURL, text }) {
  // needs to open a modal when clicked on
  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '50px',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '2',
    visibility: 'visible',
  };

  const [showModal, toggleModal] = useState(false);

  const modalAppear = () => {
    console.log('modal click');
    toggleModal(!showModal);
  };

  return (
    <div style={wrapperStyles} onClick={modalAppear}>
      <img
        //src={'https://win98icons.alexmeub.com/icons/png/users-2.png'}
        src={iconURL}
        alt=''
        style={{
          width: '30px',
          height: '30px',
        }}
      />
      <p
        style={{
          paddingTop: '10px',
        }}
      >
        {text}
      </p>
      {showModal && (
        <div
          style={{
            zIndex: '3',
            position: 'absolute',
          }}
        >
          <ModalWindow />
        </div>
      )}
    </div>
  );
}

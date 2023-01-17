import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Model.css';
export default function Modal({ setShow, show, message }) {
  const navigate = useNavigate();

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  function closePopup() {
    if (message.route) {
      setShow(!show);
      navigate('/welcome', { state: message.data });
    } else {
      setShow(!show);
    }
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>{message.message}</h1>
        <button
          className="clsBtn"
          style={{ float: 'right' }}
          type="button"
          onClick={closePopup}
        >
          ×
        </button>
      </section>
    </div>
  );
}

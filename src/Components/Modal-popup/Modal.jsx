import React from "react";
import './Modal.css'
function Modal({ id, header, body, footer , onClose}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
          <span className="close-icon" onClick={onClose}>&times;</span>
          {header ? header : <h2>Header</h2>}
        </div>
        <div className="body">{body ? body :<div><p>This is Modal body content</p></div>}</div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}

export default Modal;

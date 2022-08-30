const React = require('react');

// const ModalBackground = <div className="modal_backgound"></div>;

// const ModalBody = <div className="modal_body"></div>;

const Modal = ({ children, show, setShow }) => {
  return (
    <>
      <div className="modal_backgound" onClick={() => setShow(false)}>
        <div className="modal_body">{children}</div>
      </div>
    </>
  );
};

module.exports = Modal;

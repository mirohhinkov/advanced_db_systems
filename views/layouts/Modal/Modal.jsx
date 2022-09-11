const React = require('react');

// const ModalBackground = <div className="modal_backgound"></div>;

// const ModalBody = <div className="modal_body"></div>;

const Modal = ({ children }) => {
  return (
    <>
      <div id="modal_backgound" className="hide">
        <div id="modal_body">{children}</div>
      </div>
    </>
  );
};

module.exports = Modal;

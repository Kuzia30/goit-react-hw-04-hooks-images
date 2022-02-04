import { useEffect } from "react";
import { Overlay, ModalWrap } from "./Modal.styled";
import PropTypes from "prop-types";

function Modal({ onToggle, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const handleKeydown = (evt) => {
    if (evt.code === "Escape") {
      onToggle();
    }
  };

  const handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onToggle();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrap>{children}</ModalWrap>
    </Overlay>
  );
}
export default Modal;

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

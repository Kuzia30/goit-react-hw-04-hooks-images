import { Component } from "react";
import { Overlay, ModalWrap } from "./Modal.styled";
import PropTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onToggle();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onToggle();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWrap>{this.props.children}</ModalWrap>
      </Overlay>
    );
  }
}
export default Modal;

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

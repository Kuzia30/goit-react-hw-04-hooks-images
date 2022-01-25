import PropTypes from "prop-types";
import { ButtonLoudMore } from "./Button.styled";

const Button = ({ onLoadMore }) => {
  return (
    <ButtonLoudMore type="button" onClick={onLoadMore}>
      Load more
    </ButtonLoudMore>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

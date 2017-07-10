import PropTypes from "prop-types";

export default PropTypes.shape({
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
});

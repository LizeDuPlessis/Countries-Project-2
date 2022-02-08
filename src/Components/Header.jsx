import PropTypes from "prop-types";
function Header({ title }) {
  return <header>{title}</header>;
}

export default Header;
Header.defaultProps = {
  title: "Countries of the World",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

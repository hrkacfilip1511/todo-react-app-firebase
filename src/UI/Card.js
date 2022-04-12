import classes from "./Card.module.css";
import PropTypes from "prop-types";
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Card;

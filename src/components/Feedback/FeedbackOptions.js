import React from "react";
import PropTypes from "prop-types";

import s from "./Feedback.module.css";

const FeedbackOptions = ({ types, onLeaveFeedback }) => {
  return types.map((option) => (
    <button
      key={option}
      type="button"
      className={s.button}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  types: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

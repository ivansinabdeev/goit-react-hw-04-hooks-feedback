import React from "react";
import PropTypes from "prop-types";

import s from "../Feedback/Feedback.module.css";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <div className={s.stat}>
      <p className={s.comment}>Good: {good}</p>
      <p className={s.comment}>Neutral: {neutral}</p>
      <p className={s.comment}>Bad: {bad}</p>
      <p className={s.comment}>Total: {total}</p>
      <p className={s.comment}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;

import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.defaultProps = { title: "" };

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

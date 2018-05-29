import React from 'react';
import PropTypes from 'prop-types';

function Template({ htmlFor, label, required }) {
  return (
    <label style={{ display: 'block' }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: 'red' }}> *</span>}
    </label>
  );
}

Template.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label Text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool
};

export default Template;
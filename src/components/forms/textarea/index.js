import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field';
import inputStyles from '../input/styles.module.scss';
import styles from './styles.module.scss';

const Textarea = ({
  name,
  label,
  placeholder,
  value,
  disabled,
  required,
  onChange,
}) => (
  <Field name={name} label={label}>
    <textarea
      className={`${inputStyles.formInput} ${styles.formTextarea}`}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={onChange}
    />
  </Field>
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Textarea.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
  disabled: false,
};

export default Textarea;
import React from 'react';

function FormField({ label, type, placeholder, onChange, name }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
}

export default FormField;

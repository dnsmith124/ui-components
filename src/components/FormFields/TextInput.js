import React from "react";

const TextInput = ({label, subtitle, placeholder, size, rows}) => {
  
  size = (size === undefined) ? 's' : size;

  return (
    <> 
    {
      rows > 1 &&
      <label className={`text-input ${size}`}> 
        {label && <span className="label">{label}</span>}
        {subtitle && <span className="subtitle">{subtitle}</span>}
        <textarea type="text" placeholder={placeholder} rows={rows} />
      </label>
    }
    {
      (rows <= 1 || rows === undefined) &&
      <label className={`text-input ${size}`}> 
        {label && <span className="label">{label}</span>}
        {subtitle && <span className="subtitle">{subtitle}</span>}
        <input type="text" placeholder={placeholder} size="1" />
      </label>
    }
    </>
  );
}

export default TextInput;
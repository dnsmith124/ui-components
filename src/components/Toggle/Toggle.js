import React, {useState} from "react";

const Toggle = ({labelOne, labelTwo, labelInternal, checked}) => {

  const [isChecked, setIsChecked] = useState(checked);

  let classList = (labelOne && labelTwo ) ? 'toggle has-label': 'toggle no-label';
  classList += (labelInternal) ? ' internal': ' external';


  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (

    <label className={classList + " " + isChecked}>
      {(labelOne && labelTwo && !labelInternal && <span className="label one">{labelOne}</span>)}
      <input type="checkbox" onChange={handleChange} defaultChecked={checked}/>
      <span className="slider round">
        {(labelOne && labelTwo && labelInternal && <span className="label one">{labelOne}</span>)}
        {(labelOne && labelTwo && labelInternal && <span className="label two">{labelTwo}</span>)}
      </span>
      {(labelOne && labelTwo && !labelInternal && <span className="label two">{labelTwo}</span>)}
    </label>

  );
}


export default Toggle;
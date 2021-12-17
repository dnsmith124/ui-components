import React, {useState, useEffect} from "react";
import AnimateHeight from "react-animate-height";

const Select = ({label, subtitle, name, size, handleChange, children}) => {

  const [selectedItem, setSelectedItem] = useState(undefined);
  const [selectOpen, setSelectOpen] = useState(false);
  const [height, setHeight] = useState(0);
  let openClass = (selectOpen) ? 'open' : 'closed';

  size = (size === undefined) ? 's' : size;

  handleChange = (handleChange) ? handleChange : () => {};

  const handleSelectClick = (e) => {
    e.preventDefault();
    setSelectOpen(!selectOpen);
  }

  const handleOptionClick = (e) => {
    e.preventDefault();
    setSelectedItem(e.target.dataset.value);
    setSelectOpen(!selectOpen);
    handleChange(e.target.dataset.value);
  }

  // const getValue = () => {
  //   return selectedItem;
  // }

  useEffect(() => {
    if(selectOpen === false)
      setHeight(0);
    else
      setHeight('auto');
  }, [selectOpen])
  return (
    <> 
      <label className={`select ${size}`} > 
        {label && <span className="label">{label}</span>}
        {subtitle && <span className="subtitle">{subtitle}</span>}
        <div className={`select-container ${openClass}`}>
          <select type="text" name={name} onMouseDown={handleSelectClick} value={selectedItem} defaultValue="" >
            <option value="" disabled hidden>Select</option>
            {children}
          </select>
          <span className="icon" onMouseDown={handleSelectClick}></span>
          <AnimateHeight className={`select-list ${openClass}`}
            duration={250}
            height={height}
          > {
            children.map((child, i) => {
              return(
                <span onClick={handleOptionClick} key={i} className="option" data-value={child.props.value}>{child.props.children}</span>
                );
              })
            }
          </AnimateHeight>
        </div>
      </label>
    </>
  );
}

export default Select;
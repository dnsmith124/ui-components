import React, {useState} from "react";

const Button = ({isSecondary, handleClick, href, iconOnly, _blank, type, children}) => {

  let buttonStyle = (isSecondary) ? 'secondary' : 'primary';
  buttonStyle += (iconOnly) ? ' icon-only': '';

  type = (type) ? type : '';

  const [clicked, setClicked] = useState(false);
  
  if(handleClick === undefined) {
    handleClick = (e) => {
      setClicked(true);
    }
  }
  
  return ( 
    <> 
      {href && 
        <a className={`button ${buttonStyle} ${clicked && 'clicked'}`} onClick={handleClick} href={href} target={_blank && '_blank'}>
          {children}
        </a>
      }
      {!href && 
        <button className={`button ${buttonStyle} ${clicked && 'clicked'}`} type={type} onClick={handleClick}>
          {children}
        </button>
      }
    </>
  );
}

export default Button;
import React from 'react';

import './button.sass';

let Button = (properties) => {
  let { className, onClick } = properties;

  return (
    <button className={"button" + " " + className} onClick={onClick}>+</button>
  );
}

export default Button;
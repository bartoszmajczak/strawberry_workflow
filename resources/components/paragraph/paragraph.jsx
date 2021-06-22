import React from 'react';

import './paragraph.sass';

let Paragraph = (properties) => {
  let { className, value } = properties;

  return (
    <p className={"paragraph" + " " + className}>{value}</p>
  );
}

export default Paragraph;
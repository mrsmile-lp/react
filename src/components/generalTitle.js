import React from "react";
import {Link} from 'react-router-dom';

function GeneralTitle({title}) {
  return (
    <Link to='/'>
    <div className="general-title">
      <h1>{title}</h1>
    </div>
    </Link>
  );
}

export default GeneralTitle;
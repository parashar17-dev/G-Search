import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
   <div className="spinner-wrapper">
      <img src={spinner} alt="Spinner image" className="Spinner" />
   </div>
);

export default Spinner;

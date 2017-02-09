import React from 'react';
import Spinner from 'react-spinkit';

export default function Loader() {
  return(
    <div className="spinner">
      <Spinner spinnerName='double-bounce' />
    </div>
  );
}

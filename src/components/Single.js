import React, { Component } from 'react';

const Single = ({match}) => (
  <div className="Single">
    <p className="SingleText">
      Single image {match.params.id}
    </p>
  </div>
)
 export default Single;
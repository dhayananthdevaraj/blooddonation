import React from 'react';

const DisplayResponse = ({ formData }) => {
  return (
    <div>
      <h2>Form Response</h2>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
    </div>
  );
};

export default DisplayResponse;

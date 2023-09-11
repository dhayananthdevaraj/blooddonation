import React, { useState } from 'react';


const SuccessMessage = ({ formData, onClose }) => {
  const [showResponse, setShowResponse] = useState(false);

  const handleViewResponse = () => {
    setShowResponse(true);
  };

  return (
    <div className="success-modal">
      <div className="modal-content">
        <h2 className="success-title">Form Submitted Successfully</h2>
        {!showResponse ? (
          <div>
            <p className="success-message">
              Click "View Response" to see your submitted data:
            </p>
            <button className="view-response-button" onClick={handleViewResponse}>
              View Response
            </button>
          </div>
        ) : (
          <div>
            <p className="success-message">Form Data:</p>
            <ul className="response-list">
              <li className="response-item">
                <strong>Name:</strong> {formData.name}
              </li>
              <li className="response-item">
                <strong>Age:</strong> {formData.age}
              </li>
              <li className="response-item">
                <strong>Gender:</strong> {formData.gender}
              </li>
              <li className="response-item">
                <strong>City:</strong> {formData.city}
              </li>
              <li className="response-item">
                <strong>Phone:</strong> {formData.phone}
              </li>
              <li className="response-item">
                <strong>Blood Group:</strong> {formData.bloodGroup}
              </li>
            </ul>
            <button className="close-button" onClick={() => onClose()}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessMessage;

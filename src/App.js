import React, { useState } from 'react';
import './App.css'; // Import your CSS if you have one
import Header from './components/Header';
import FormComponent from './components/FormComponent';
import SuccessMessage from './components/SuccessMessage';
import Footer from './components/Footer';
import bloodBG from './assessts/blood-1.jpg'; // Import your hospital image

function App() {
  const [formData, setFormData] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowSuccessMessage(true);
  };

  const handleReload = () => {
    setFormData(null);
    setShowSuccessMessage(false);
  };

  return (
    <div className="App">
      <Header onReload={handleReload} />
      <div className="content-container">
        <div className="left-side">
          {!formData ? (
            <FormComponent onSubmit={handleFormSubmit} />
          ) : (
            showSuccessMessage ? (
              <SuccessMessage formData={formData} onClose={() => setShowSuccessMessage(false)} />
            ) : null
          )}
        </div>
        <div className="right-side">
          <img src={bloodBG} alt="blood" className="blood-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

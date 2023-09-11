import React, { useState } from 'react';


const FormComponent = ({ onSubmit }) => {
  const initialFormData = {
    name: '',
    age: '',
    gender: 'Select Gender',
    city: '',
    phone: '',
    bloodGroup: 'Blood Group',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    }

    if (formData.age < 18 || formData.age > 99) {
      newErrors.age = 'Age must be between 18 and 99';
    }

    if (formData.gender === 'Select Gender') {
      newErrors.gender = 'Please select a gender';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    }

    if (formData.bloodGroup === 'Blood Group') {
      newErrors.bloodGroup = 'Please select a blood group';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      setShowSuccessMessage(true);
      setFormData(initialFormData); // Clear the form after submission
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Select Gender">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="Blood Group">Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            {/* Add more blood group options as needed */}
          </select>
          {errors.bloodGroup && <span className="error">{errors.bloodGroup}</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;

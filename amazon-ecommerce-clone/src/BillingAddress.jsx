import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './BillingAddress.css'

function BillingAddress() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const proceedToPayment = () => {
    // Validate the form data here
    if (formData.name && formData.address && formData.city && formData.postalCode) {
      // Navigate to the payment page and pass the billing address data
      navigate('/payment', { state: { billingAddress: formData } });
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (
    <div className='billing'>
      <h2>Billing Address</h2>
      <div className='billing__container'>
      <form>
        <h5>Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </h5>
          <h5>Address:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </h5>
          <h5>City:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
          </h5>
          <h5>Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          </h5>
        <button onClick={proceedToPayment}>Proceed to Payment</button>
      </form>
      </div>
    </div>
  );
}

export default BillingAddress;

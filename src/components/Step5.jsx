import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ZakatContext } from '../context/ZakatContext';

const Step5 = () => {
  const navigate = useNavigate();
  const { zakatAmountDue } = useContext(ZakatContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCancel = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/step4');
  };

  const handleCompletePayment = () => {
    if (zakatAmountDue === 0) {
      toast.error('Zero amount is not accepted.');
      return;
    }
    
    if (!firstName || !lastName || !email || !address || !zipCode || !country || !cardNumber || !expiryMonth || !expiryYear || !cvc) {
      toast.error('Please fill out all fields.');
    } else {
      toast.success(`Payment Completed: You have paid $${zakatAmountDue.toFixed(2)}`);
      navigate('/home');
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg">
        <div className="bg-red-500 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h1 className="text-lg">Pay</h1>
          <button className="text-white" onClick={handleCancel}>✕</button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block">First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full border p-2" placeholder="First Name" />
              </div>
              <div>
                <label className="block">Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full border p-2" placeholder="Last Name" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" placeholder="Email address" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block">Door/Flat number</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border p-2" placeholder="Door/Flat number" />
              </div>
              <div>
                <label className="block">ZIP/Postal Code</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full border p-2" placeholder="ZIP/Postal Code" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block">Country</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full border p-2" placeholder="Country" />
            </div>
            <div className="mb-4">
              <label className="block">Credit/Debit card number</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full border p-2" placeholder="Credit/Debit card number" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block">Expiry Date</label>
                <input type="text" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} className="w-full border p-2" placeholder="MM" />
              </div>
              <div>
                <label className="block">&nbsp;</label>
                <input type="text" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} className="w-full border p-2" placeholder="YY" />
              </div>
              <div>
                <label className="block">CVC</label>
                <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} className="w-full border p-2" placeholder="CVC" />
              </div>
            </div>
            <div className="flex justify-between">
              <button 
                type="button" 
                className="bg-gray-500 text-white p-2 rounded"
                onClick={handleBack}
              >
                Back
              </button>
              <button 
                type="button" 
                className="bg-green-500 text-white p-2 rounded"
                onClick={handleCompletePayment}
              >
                Complete Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step5;

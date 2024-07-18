import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Step1 = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCancel = () => {
    navigate('/home');
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      toast.error('Please fill out all fields.');
    } else {
      navigate('/step2');
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg">
        <div className="bg-red-500 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h1 className="text-lg">Business Assets</h1>
          <button className="text-white" onClick={handleCancel}>✕</button>
        </div>
        <div className="p-4">
          <p className="mb-4">Due to your multiple businesses, your Zakat calculation is likely to be complex. At NZF, we take Zakat seriously and do our best to ensure that you calculate and pay accurately.</p>
          <p className="mb-4">Please enter your details below to be contacted by our dedicated Business Team.</p>
          <form onSubmit={handleNext}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block">Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First" className="w-full border p-2" />
              </div>
              <div>
                <label className="block">Last</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last" className="w-full border p-2" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" />
            </div>
            <div className="mb-4">
              <label className="block">Phone</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-2" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-red-500 text-white p-2 rounded">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;

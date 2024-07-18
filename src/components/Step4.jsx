import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ZakatContext } from '../context/ZakatContext';
import { toast } from 'react-toastify';

const Step4 = () => {
  const { totalAssets, totalDebts, setZakatAmountDue } = useContext(ZakatContext);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/step3');
  };

  const handleNext = () => {
    if (totalAssets === 0 || totalDebts === 0) {
      toast.error('Please make sure all fields are filled out correctly.');
    } else {
      const netZakatableAssets = totalAssets - totalDebts;
      const zakatAmountDue = netZakatableAssets * 0.025;
      setZakatAmountDue(zakatAmountDue); // Store the Zakat amount for later use
      navigate('/step5');
    }
  };

  const netZakatableAssets = totalAssets - totalDebts;
  const zakatAmountDue = netZakatableAssets * 0.025;

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="bg-red-500 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h1 className="text-lg">Your calculation</h1>
          <button className="text-white" onClick={handleCancel}>✕</button>
        </div>
        <div className="p-4 flex flex-wrap">
          <div className="w-full lg:w-1/2 px-2 mb-4">
            <h2 className="text-green-500 text-lg mb-2">3/3 Your calculation</h2>
            <div className="mb-4 flex justify-between">
              <span>Total assets</span>
              <span>${totalAssets.toFixed(2)}</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span>Minus total debts</span>
              <span>${totalDebts.toFixed(2)}</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span>NET Zakatable assets</span>
              <span>${netZakatableAssets.toFixed(2)}</span>
            </div>
            <div className="mb-4 flex justify-between text-green-500">
              <span>Zakat amount due</span>
              <span>${zakatAmountDue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4">
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
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 mb-4 flex justify-center items-center">
            <div className="relative" style={{ width: '200px', height: '200px' }}>
              <CircularProgressbar
                value={zakatAmountDue}
                maxValue={netZakatableAssets}
                text={`$${zakatAmountDue.toFixed(2)}`}
                styles={buildStyles({
                  pathColor: '#FF0000',
                  textColor: '#FF0000',
                  trailColor: '#D3D3D3',
                  backgroundColor: '#FFF',
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;

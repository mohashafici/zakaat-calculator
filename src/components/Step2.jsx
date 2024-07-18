import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZakatContext } from '../context/ZakatContext';
import { toast } from 'react-toastify';

const Step2 = () => {
  const {
    arrears,
    setArrears,
    bills,
    setBills,
    longTermDebts,
    setLongTermDebts,
    receivables,
    setReceivables,
    totalAssets,
    setTotalAssets,
    totalDebts,
    updateDebts,
  } = useContext(ZakatContext);

  const navigate = useNavigate();

  useEffect(() => {
    updateDebts();
  }, [arrears, bills, longTermDebts, receivables]);

  const handleCancel = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/step1');
  };

  const handleNext = () => {
    updateDebts();
    if (totalDebts > totalAssets) {
      toast.error('Assets must be more than your debts');
    } else if (totalDebts === totalAssets) {
      toast.info('You are not giving zakaat because your debts and assets are equal');
    } else {
      navigate('/step3');
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg">
        <div className="bg-red-500 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h1 className="text-lg">Enter your deductible debts</h1>
          <button className="text-white" onClick={handleCancel}>✕</button>
        </div>
        <div className="p-4">
          <form>
            <div className="mb-4">
              <label className="block">Arrears:</label>
              <input
                type="number"
                value={arrears}
                onChange={(e) => setArrears(parseFloat(e.target.value) || 0)}
                className="w-full border p-2"
                placeholder="Add the current value of your arrears"
              />
            </div>
            <div className="mb-4">
              <label className="block">Bills:</label>
              <input
                type="number"
                value={bills}
                onChange={(e) => setBills(parseFloat(e.target.value) || 0)}
                className="w-full border p-2"
                placeholder="Add the current value of your bills"
              />
            </div>
            <div className="mb-4">
              <label className="block">Long-term debts:</label>
              <input
                type="number"
                value={longTermDebts}
                onChange={(e) => setLongTermDebts(parseFloat(e.target.value) || 0)}
                className="w-full border p-2"
                placeholder="Add the current value of your long-term debts"
              />
            </div>
            <div className="mb-4">
              <label className="block">Receivables:</label>
              <input
                type="number"
                value={receivables}
                onChange={(e) => setReceivables(parseFloat(e.target.value) || 0)}
                className="w-full border p-2"
                placeholder="Add the current value of your receivables"
              />
            </div>
            <div className="mb-4">
              <label className="block">Total assets:</label>
              <input
                type="number"
                value={totalAssets}
                onChange={(e) => setTotalAssets(parseFloat(e.target.value) || 0)}
                className="w-full border p-2"
                placeholder="Enter total assets"
              />
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
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;

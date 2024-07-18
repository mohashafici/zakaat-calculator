import React, { createContext, useState } from 'react';

export const ZakatContext = createContext();

export const ZakatProvider = ({ children }) => {
  const [arrears, setArrears] = useState(0);
  const [bills, setBills] = useState(0);
  const [longTermDebts, setLongTermDebts] = useState(0);
  const [receivables, setReceivables] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalDebts, setTotalDebts] = useState(0);
  const [zakatAmountDue, setZakatAmountDue] = useState(0);

  const updateDebts = () => {
    const total = parseFloat(arrears) + parseFloat(bills) + parseFloat(longTermDebts) + parseFloat(receivables);
    setTotalDebts(total);
  };

  return (
    <ZakatContext.Provider
      value={{
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
        zakatAmountDue,
        setZakatAmountDue,
        updateDebts,
      }}
    >
      {children}
    </ZakatContext.Provider>
  );
};

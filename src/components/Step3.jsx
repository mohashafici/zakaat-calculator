import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faHandHoldingUsd, faChartLine, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root'); // For accessibility

const Step3 = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleCancel = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/step2');
  };

  const handleNext = () => {
    navigate('/step4');
  };

  const sections = [
    { id: 'goldSilver', title: 'GOLD & SILVER', description: 'Your gold is fully zakatable. Please note the total grams of gold you own. Your silver is fully zakatable. Please note the total grams of silver you own.', icon: faCoins, nisaab: 'The nisaab for gold is 87.48 grams and for silver is 612.36 grams.' },
    { id: 'moneyOwed', title: 'MONEY OWED TO YOU', description: 'Your money will be paid back in full. Please note this amount.', icon: faHandHoldingUsd, nisaab: 'Ensure you note down all money owed to you.' },
    { id: 'investments', title: 'INVESTMENTS', description: 'You own Shares, Trusts, Pensions as a long term investment. Please note the current market value of these in your portfolio.', icon: faChartLine, nisaab: 'Note the current market value of your investments.' },
    { id: 'liabilities', title: 'BUSINESS LIABILITIES', description: 'You hold 12 months installments of long term liabilities / bank loans (capital amount only). Current Liabilities, Arrears in your business. Please note the amount of each.', icon: faFileInvoiceDollar, nisaab: 'Note all business liabilities, including long term and current liabilities.' },
  ];

  const openModal = (section) => {
    setModalContent({ title: section.title, description: section.nisaab });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="bg-red-500 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h1 className="text-lg">Summary</h1>
          <button className="text-white" onClick={handleCancel}>✕</button>
        </div>
        <div className="p-4">
          <p className="mb-4">Your Zakatable Assets Are...</p>
          <p className="mb-4">Based on the answers you gave, please find below your Zakatable assets. In the next step of this form, you will input the values of each asset. Please have these at hand before continuing. Please save your form below if you have to.</p>
          <div className="flex flex-wrap -mx-2">
            {sections.map(section => (
              <div key={section.id} className="w-1/2 px-2 mb-4">
                <div className="p-4 rounded bg-gray-100 cursor-pointer" onClick={() => openModal(section)}>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={section.icon} className="text-red-500 mr-2" />
                    <h2 className="text-lg">{section.title}</h2>
                  </div>
                  <p>{section.description}</p>
                </div>
              </div>
            ))}
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
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Nisaab Information"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="p-4">
          <h2 className="text-lg mb-4">{modalContent.title}</h2>
          <p>{modalContent.description}</p>
          <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Step3;

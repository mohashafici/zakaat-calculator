import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandHoldingHeart, FaHandHoldingUsd, FaMosque, FaInfoCircle, FaBalanceScale } from 'react-icons/fa';
import image from '../assets/image.png'; // Adjust the path as necessary

const Home = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/step1'); // Navigate to the Step1 page
  };

  const handleLearnMore = () => {
    navigate('/learn-more'); // Navigate to the Learn More page
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-50">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4 flex items-center">
          <FaHandHoldingHeart className="mr-2" />
          PAYING ZAKAT
        </h1>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Zakat is a form of almsgiving treated in Islam as a religious obligation or tax,
          which, by Quranic ranking, is next after prayer (salat) in importance. As one of
          the Five Pillars of Islam, Zakat is a religious duty for all Muslims who meet
          the necessary criteria of wealth. It is a mandatory charitable contribution,
          often considered to be a tax.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          The objective of Zakat is to redistribute wealth and provide for the less fortunate.
          By giving Zakat, Muslims purify their wealth and ensure the well-being of the
          community. Join us in fulfilling this important pillar and make a difference in
          the lives of those in need.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleDonate}
            className="flex items-center text-green-600 hover:text-green-800 transition duration-200"
          >
            <FaHandHoldingUsd className="mr-2" />
            <span>Donate</span>
          </button>
          <button
            onClick={handleLearnMore}
            className="flex items-center text-green-600 hover:text-green-800 transition duration-200"
          >
            <FaInfoCircle className="mr-2" />
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={image} alt="Paying Zakat" className="w-3/4 h-auto mx-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Home;

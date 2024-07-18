import React from 'react';
import { FaBalanceScale, FaHandHoldingUsd, FaInfoCircle } from 'react-icons/fa';

const LearnMore = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-6 flex items-center">
        <FaInfoCircle className="mr-2" />
        Learn More About Zakat
      </h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
          <FaBalanceScale className="mr-2" />
          What is Nisaab?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nisaab is the minimum amount of wealth a Muslim must possess before they become eligible to pay Zakat.
          This amount is often equivalent to the value of 3 ounces of gold or 21 ounces of silver. It serves as
          a threshold to ensure that only those who have more than what is necessary for a basic standard of living
          are required to give Zakat.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
          <FaHandHoldingUsd className="mr-2" />
          Calculating Your Zakat
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To calculate your Zakat, you need to consider your savings, investments, gold, silver, business goods,
          and other assets that you have owned for a full lunar year. After deducting your debts and liabilities,
          2.5% of the remaining amount is given as Zakat.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
          <FaInfoCircle className="mr-2" />
          Why Pay Zakat?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Paying Zakat purifies your wealth, supports those in need, and helps to reduce inequality in the community.
          It is an essential pillar of Islam that fosters social cohesion and provides for the well-being of the
          Ummah.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;

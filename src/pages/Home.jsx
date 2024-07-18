import React from 'react';
import image from '../assets/image.png'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold text-green-600 mb-4">PAYING ZAKAT</h1>
        <p className="text-lg mb-6">
          Zakat is a form of almsgiving treated in Islam as a religious obligation or tax,
          which, by Quranic ranking, is next after prayer (salat) in importance. As one of
          the Five Pillars of Islam, Zakat is a religious duty for all Muslims who meet
          the necessary criteria of wealth. It is a mandatory charitable contribution,
          often considered to be a tax.
        </p>
        <p className="text-lg mb-6">
          The objective of Zakat is to redistribute wealth and provide for the less fortunate.
          By giving Zakat, Muslims purify their wealth and ensure the well-being of the
          community. Join us in fulfilling this important pillar and make a difference in
          the lives of those in need.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src={image} alt="Paying Zakat" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;

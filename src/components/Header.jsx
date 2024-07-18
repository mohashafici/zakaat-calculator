import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Header = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    toast.info(
      <div>
        <p>Are you sure you want to log out?</p>
        <button
          onClick={() => {
            setIsAuthenticated(false);
            toast.dismiss();
            toast.success('Logged out successfully.');
          }}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Yes
        </button>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  return (
    <div className="flex justify-around items-center bg-gray-200 p-4">
      {[1, 2, 3, 4, 5].map((num) => (
        <Link key={num} to={`/step${num}`} className="text-white mx-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500">
            {num}
          </div>
        </Link>
      ))}
      <FiLogOut className="text-red-500 text-2xl cursor-pointer" onClick={handleLogout} />
    </div>
  );
};

export default Header;

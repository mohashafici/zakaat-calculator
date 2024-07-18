import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './Header';

const AuthenticatedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // assuming user is authenticated by default

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticatedLayout;

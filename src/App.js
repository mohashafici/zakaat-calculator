import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { ZakatProvider } from './context/ZakatContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticatedLayout from './components/AuthenticatedLayout';

const App = () => {
  return (
    <ZakatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<AuthenticatedLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="step1" element={<Step1 />} />
            <Route path="step2" element={<Step2 />} />
            <Route path="step3" element={<Step3 />} />
            <Route path="step4" element={<Step4 />} />
            <Route path="step5" element={<Step5 />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </ZakatProvider>
  );
};

export default App;

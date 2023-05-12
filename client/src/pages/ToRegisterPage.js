import React from 'react';
import { useAuth } from '../utils/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

const ToRegisterPage = () => {
  const auth = useAuth();
  return <>{auth.user?.uid ? <Navigate to='/' replace /> : <Outlet />}</>;
};

export default ToRegisterPage;

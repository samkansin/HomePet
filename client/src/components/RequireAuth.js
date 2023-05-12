import React from 'react';
import { useAuth } from '../utils/AuthProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import usePermission from '../hooks/usePermission';
import Loading from './Loading';

const RequireAuth = ({ allowedRoles }) => {
  const auth = useAuth();
  const location = useLocation();
  const { hasPermission } = usePermission();
  const hasRequiredRole = hasPermission(allowedRoles);

  if (auth?.isLoading) {
    return <Loading loading={auth?.isLoading} />;
  } else if (auth.user?.email) {
    if (hasRequiredRole) {
      return <Outlet />;
    } else {
      throw new Error('Unauthorized');
    }
  }

  return <Navigate to='/authen' state={{ from: location.pathname }} replace />;
};

export default RequireAuth;

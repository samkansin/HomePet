import { useAuth } from '../utils/AuthProvider';

const usePermission = (id) => {
  const { user } = useAuth();
  if (!id) {
    const hasPermission = (allowedRoles) =>
      user?.roles?.some((role) => allowedRoles.includes(role));
    return { hasPermission };
  } else {
    const hasPermission = (id) => user?.uid === id;
    return { hasPermission };
  }
};

export default usePermission;

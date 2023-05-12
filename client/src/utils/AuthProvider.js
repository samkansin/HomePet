import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(() =>
    sessionStorage.getItem('accessToken')
      ? JSON.parse(sessionStorage.getItem('accessToken'))
      : {}
  );

  const [loading, setLoading] = useState(false)

  let signin = (newUser, callback) => {
    setLoading(true)
    if (newUser) {
      try {
        sessionStorage.setItem('accessToken', JSON.stringify(newUser));
        setUser(newUser);
      } catch (err) {}
    } else {
      sessionStorage.removeItem('accessToken');
      setUser({});
    }
    setLoading(false)
    callback();
  };

  let signout = (callback) => {
    setLoading(true);
    if (sessionStorage.getItem('accessToken')) {
      sessionStorage.clear();
    }
    setUser({});
    setLoading(false)
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const authenticated = localStorage.getItem('token');

  return !authenticated ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoute;

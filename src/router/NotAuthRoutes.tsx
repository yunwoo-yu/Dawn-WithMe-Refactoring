import { Navigate, Outlet } from 'react-router-dom';

const NotAuthRoutes = () => {
  const authenticated = localStorage.getItem('token');

  return authenticated ? <Navigate to='/home' /> : <Outlet />;
};

export default NotAuthRoutes;

import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export default function PrivateRoutes() {
  const isAuth = useAppSelector((state) => (!!state.authReducer.loggedIn));
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

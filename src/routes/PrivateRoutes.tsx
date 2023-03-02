import React, {
  Children, ReactHTMLElement, ReactNode, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactDOM } from 'react-dom/client';
import authSlice from '../features/authSlice';
import { useAppDispatch } from '../hooks';
import authReducer from '../features/authSlice';
import { UserAuthSchema } from '../types/types';
import { setUser } from '../features/authSlice';

export default function PrivateRoutes({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch('http://localhost:3000/auth/signIn', {
      credentials: 'include',
    }).then((res) => {
      if (!res || !res.ok || res.status >= 400) {
        return navigate('/signIn');
      }
      return res.json();
    }).then((result:UserAuthSchema) => {
      if (result.loggedIn) {
        dispatch(setUser(result));
      }
    });
  }, []);
  return children;
}

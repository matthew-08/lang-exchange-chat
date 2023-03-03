import './global.css';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { UserAuthSchema } from './types/types';
import { useAppDispatch } from './hooks';
import { setUser } from './features/authSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch('http://localhost:3000/auth/signIn', {
      credentials: 'include',
    }).then((res) => {
      if (!res || !res.ok || res.status >= 400) {
        return null; // return nothing as user isn't logged in, default user values will be kept.
      }
      return res.json();
    }).then((result:UserAuthSchema) => {
      if (result.loggedIn) {
        (dispatch(setUser(result)));
        return redirect('/chat'); // If user is logged in, redirect them to chat.
      } return null;
    });
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;

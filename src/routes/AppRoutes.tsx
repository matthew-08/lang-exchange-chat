import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Register from '../pages/homepage/Register';
import SignIn from '../pages/homepage/SignIn';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SignIn />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="*"
          element={<SignIn />}
        />
      </Routes>
    </Router>
  );
}

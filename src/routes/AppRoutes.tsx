import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Register from '../pages/homepage/components/RegisterForm';
import SignIn from '../pages/homepage/SignIn';
import Dashboard from '../pages/dashboard/Dashboard';

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
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="*"
          element={<SignIn />}
        />
      </Routes>
    </Router>
  );
}

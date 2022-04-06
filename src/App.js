import React from 'react';
import {
  Dashboard,
  Login,
  RedirectComponent,
  AuthWrapper,
  Error,
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isUser ? <Dashboard></Dashboard> : <RedirectComponent />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;

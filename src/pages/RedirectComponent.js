import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectComponent = () => {
  return <Navigate to="/login"></Navigate>;
};

export default RedirectComponent;

import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Products from '../privatepages/Products';

function ProtectedRoute({ path, element }) {
  const loggedInUsers = localStorage.getItem('loggedInUsers');

  if (!loggedInUsers) {
    return <Navigate to="/login" />;
  }
  else{
    <Navigate to="/products" />
  
  }

  return <Routes> <Route path={path} element={element} /></Routes>
}

export default ProtectedRoute;

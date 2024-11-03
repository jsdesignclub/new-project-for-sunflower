import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./components/shared/Layout";

import { Dashboard } from "./components/shared/Dashboard";

import LoginPage from './components/shared/LoginPage';
import ProtectedRoute from './components/shared/ProtectedRoute';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
              <Route index element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

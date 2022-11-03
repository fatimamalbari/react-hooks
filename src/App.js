import React from 'react';
import { AppThemeContext } from './context/context';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import routes from './config/routes';
import { AuthProvider } from './context/context';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

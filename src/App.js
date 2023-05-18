import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ResponsiveAppBar from './privatepages/ResponsiveAppBar';
import { routes } from './routes/routes';
import ActionAreaCard from './privatepages/ActionAreaCard';
import { CartProvider } from './CartContext';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <CartProvider>
        <ResponsiveAppBar />
        <QueryClientProvider client={queryClient}>
          <Routes>
            {routes.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
          </Routes>
        </QueryClientProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

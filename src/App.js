import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './privatepages/ResponsiveAppBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import ActionAreaCard from './privatepages/ActionAreaCard';
import { CartProvider } from './CartContext';
import ProductPage from './privatepages/ProductPage';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false
    }
  }
}) //bunun sayesinde her defe sorgu getmir

function App() {
  return (
    <>
        <ResponsiveAppBar />
        <QueryClientProvider client={queryClient}>
          <Routes>
            {routes &&
              routes.map((item) => {
                return <Route key={item.path} path={item.path} element={item.element} />;
              })}
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </>
  );
}

export default App;

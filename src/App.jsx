import { Routes, Route, useLocation } from 'react-router-dom';
import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import DetailPages from './pages/DetailPages';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const handleRouteChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    handleRouteChange();
  }, [location]);
  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product" element={<ProductPages />} />
        <Route path="/detail/:id" element={<DetailPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;

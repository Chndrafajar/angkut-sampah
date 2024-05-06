import { Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import ProductPages from './pages/ProductPages';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import DetailPages from './pages/DetailPages';

function App() {
  return (
    <>
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

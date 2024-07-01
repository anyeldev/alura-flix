import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo" element={<New />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

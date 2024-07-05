import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideoProvider } from './context/Video';
import Home from './pages/Home';
import New from './pages/New';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <VideoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuevo" element={<New />} />
          </Routes>
          <Footer />
        </VideoProvider>
      </BrowserRouter>
    </>
  );
}

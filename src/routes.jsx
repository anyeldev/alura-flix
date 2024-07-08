import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideoProvider } from './context/Video';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import New from './pages/New';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import theme from './theme';

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <VideoProvider>
          <ChakraProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nuevo" element={<New />} />
            </Routes>
            <Footer />
          </ChakraProvider>
        </VideoProvider>
      </BrowserRouter>
    </>
  );
}

import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Nav from './Nav';
import Photos from './Photos';
import 'assets/styles/custom.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Nav />
        <Container maxW="container.lg" p={0}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="photos" element={<Photos />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

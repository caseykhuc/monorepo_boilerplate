import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Nav from './Nav';
import Photos from './Photos';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" p={0}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="photos" element={<Photos />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;

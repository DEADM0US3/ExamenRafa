import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import SolicitudGet from './components/SolicitudGet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/app" element={<SolicitudGet/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

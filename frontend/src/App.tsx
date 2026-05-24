import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/shared/MainLayout.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
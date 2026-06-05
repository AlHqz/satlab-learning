import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout';
import {Home, Dashboard} from './pages';
import Class from './components/shared/Class';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/:eraId/:activityId/class" element={<Class />} />
            </Route>
            <Route path="/:eraId/:activityId/activity"/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
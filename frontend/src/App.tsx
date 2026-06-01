import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, ActivityLayout } from './components/layout';
import {Home, Dashboard} from './pages';
import Temp from './pages/Temp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ActivityLayout eraName="ERA 3" activityTitle="Activity 8: FOR THE REWARD!"/>}>
              <Route path="/temp" element={<Temp />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
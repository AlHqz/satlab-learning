import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, ActivityLayout } from './components/layout';
import {Home, Dashboard} from './pages';
import * as Activities from './pages//activities/index';
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
            <Route element={<ActivityLayout eraName="ERA 3" activityTitle="Activity 8: FOR THE REWARD!" backUrl='/era3/activity8/class'/>}>
              <Route path="/era3/activity8/activity" element={<Activities.MiningSimulator />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
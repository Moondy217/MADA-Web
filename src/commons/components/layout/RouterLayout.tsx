import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import SplashPage from '../../../pages/Splash';
import HomePage from '../../../pages/Home/index';

export default function RouterLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<SplashPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

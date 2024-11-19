import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HomePage from '../../../pages/Home';

export default function RouterLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

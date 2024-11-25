import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import GlobalLayout from './GlobalLayout';
import SplashPage from '../../../pages/Splash';
import HomePage from '../../../pages/Home/index';
import Side from '../Side';

function LayoutWithSide({ children }: PropsWithChildren) {
  return (
    <div className="relative flex">
      <div className="fixed top-0 left-0 h-full z-50">
        <Side />
      </div>
      <div className="flex-1 ml-[40px]">{children}</div>
    </div>
  );
}

export default function RouterLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          {/* 스플래시 페이지는 사이드바 없이 표시 */}
          <Route index element={<SplashPage />} />

          {/* 나머지 페이지들은 사이드바와 함께 표시 */}
          <Route
            path="/home"
            element={
              <LayoutWithSide>
                <HomePage />
              </LayoutWithSide>
            }
          />
          {/* 추가 라우트도 같은 방식으로 처리 */}
        </Route>
      </Routes>
    </Router>
  );
}

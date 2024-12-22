import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // LoginPage 컴포넌트 임포트
import SignupPage from './pages/SignupPage'; // SignupPage 컴포넌트 임포트
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* 기본 경로에서 LoginPage 렌더링 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> {/* /signup 경로에서 SignupPage 렌더링 */}
        <Route path="/home" element={<HomePage />} /> {/* /home 경로에서 HomePage 렌더링 */}
        <Route path="/mypage" element={<MyPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;

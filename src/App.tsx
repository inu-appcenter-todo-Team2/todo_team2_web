import React from 'react';
import LoginPage from './pages/LoginPage'; // LoginPage 컴포넌트 임포트

const App: React.FC = () => {
  return (
    <div>
      <LoginPage />  {/* 바로 LoginPage 컴포넌트 렌더링 */}
    </div>
  );
};

export default App;

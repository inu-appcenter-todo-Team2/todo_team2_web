import React, { useState } from 'react';
import '../styles/LoginPage.css'; // CSS 파일 임포트

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="page-layout">
      {/* SVG 이미지 */}
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="81" viewBox="0 0 82 81" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M53.3319 5.35142C59.6886 -1.00525 69.9948 -1.00525 76.3514 5.35142C82.7081 11.7081 82.7081 22.0143 76.3514 28.3709C72.6418 32.0806 63.3873 37.8251 55.0596 40.7028C63.3873 43.5805 72.6418 49.3251 76.3515 53.0347C82.7081 59.3914 82.7081 69.6976 76.3515 76.0542C69.9948 82.4109 59.6886 82.4109 53.3319 76.0542C49.6223 72.3446 43.8777 63.0901 41.0001 54.7624C38.1224 63.09 32.3778 72.3446 28.6682 76.0542C22.3115 82.4109 12.0053 82.4109 5.64866 76.0542C-0.708003 69.6975 -0.708005 59.3913 5.64866 53.0347C9.35828 49.325 18.6128 43.5805 26.9404 40.7028C18.6128 37.8251 9.35824 32.0805 5.64861 28.3709C-0.70805 22.0142 -0.708049 11.708 5.64862 5.35138C12.0053 -1.00528 22.3115 -1.00528 28.6681 5.35138C32.3778 9.06101 38.1224 18.3155 41 26.6432C43.8777 18.3156 49.6223 9.06104 53.3319 5.35142Z" fill="black"/>
        </svg>

        {/* TodoTodo 문구 */}
        <p className="todo-text">TodoTodo</p>
      </div>

      {/* 로그인 컨테이너 */}
      <div className="login-container">
        {/* Sign In 제목 */}
        <h1 className="login-title">Sign In</h1>
        
        <form className="login-form">
          {/* 아이디 입력창 */}
          <div className="input-container">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력해주세요."
              className="login-input"
            />
          </div>

          {/* 비밀번호 입력창 */}
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요."
              className="login-input"
            />
          </div>

          {/* Sign in 버튼 */}
          <button type="submit" className="login-button">Sign in</button>
        </form>
        
        {/* 회원가입 텍스트 */}
        <p className="signup-link">회원가입 하러가기</p>
      </div>
    </div>
  );
};

export default LoginPage;
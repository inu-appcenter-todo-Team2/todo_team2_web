import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Link 컴포넌트 임포트
import '../styles/SignupPage.css'; 
import axios from 'axios';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here
    if (password === confirmPassword) {
      try {
        // Swagger에서 확인한 엔드포인트 사용
        const response = await axios.post('http://3.39.232.214/api/v1/auth/signup', {
          email,
          password,
          username : name,
          nickname,
          statusMessage,
          birth : birthday,
          gender,
          personalColor : '#111111'
        });
  
        if (response.status === 200) {
          alert('회원가입 성공!');
          navigate('/login'); 
        }
      } catch (error: any) {
        // 에러 처리
        if (error.response) {
          alert(error.response.data.message); // 서버에서 온 에러 메시지
        } else {
          alert('로그인 요청에 문제가 발생했습니다.');
        }
      }
      setStatusMessage("회원가입이 완료되었습니다!");
    } else {
      setStatusMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
  <div className="signup-page">
    <div className="page-layout">
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="81" viewBox="0 0 82 81" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M53.3319 5.35142C59.6886 -1.00525 69.9948 -1.00525 76.3514 5.35142C82.7081 11.7081 82.7081 22.0143 76.3514 28.3709C72.6418 32.0806 63.3873 37.8251 55.0596 40.7028C63.3873 43.5805 72.6418 49.3251 76.3515 53.0347C82.7081 59.3914 82.7081 69.6976 76.3515 76.0542C69.9948 82.4109 59.6886 82.4109 53.3319 76.0542C49.6223 72.3446 43.8777 63.0901 41.0001 54.7624C38.1224 63.09 32.3778 72.3446 28.6682 76.0542C22.3115 82.4109 12.0053 82.4109 5.64866 76.0542C-0.708003 69.6975 -0.708005 59.3913 5.64866 53.0347C9.35828 49.325 18.6128 43.5805 26.9404 40.7028C18.6128 37.8251 9.35824 32.0805 5.64861 28.3709C-0.70805 22.0142 -0.708049 11.708 5.64862 5.35138C12.0053 -1.00528 22.3115 -1.00528 28.6681 5.35138C32.3778 9.06101 38.1224 18.3155 41 26.6432C43.8777 18.3156 49.6223 9.06104 53.3319 5.35142Z" fill="black"/>
        </svg>
        <p className="todo-text">TodoTodo</p>
      </div>

      <div className="login-container">
        {/* Sign Up Title */}
        <div className="login-title">Sign Up</div>

        {/* 성함 입력 */}
        <div className="input-container">
          <input
            type="text"
            placeholder="성함을 입력해주세요"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 생년월일 입력 */}
        <div className="input-container">
          <label>생년월일을 입력해주세요</label>
          <div className="birthday-input">
            <input
              type="number"
              placeholder="0000"
              className="birthday-input-field"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <span>년</span>
            <input
              type="number"
              placeholder="00"
              className="birthday-input-field"
            />
            <span>월</span>
            <input
              type="number"
              placeholder="00"
              className="birthday-input-field"
            />
            <span>일</span>
          </div>
        </div>

        {/* 성별 선택 */}
        <div className="input-container">
          <label>성별</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">남자</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">여자</label>
          </div>
        </div>

        {/* 닉네임 입력 */}
        <div className="input-container">
          <input
            type="text"
            placeholder="닉네임을 입력해주세요"
            className="login-input"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button className="nickname-check-btn">닉네임중복확인</button>
        </div>

        {/* 이메일 입력 */}
        <div className="input-container">
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="email-verify-btn">이메일인증</button>
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-container">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="input-container">
          <input
            type="password"
            placeholder="비밀번호를 확인해주세요"
            className="login-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* 상태 메시지 */}
        {statusMessage && <div className="status-message">{statusMessage}</div>}

        {/* 회원가입 버튼 */}
        <button className="login-button" onClick={handleSubmit}>
          Sign Up
        </button>

        {/* 로그인하러 가기 */}
        <div className="signup-link">
          이미 계정이 있으신가요? <Link to="/login">로그인 하러 가기</Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignupPage;
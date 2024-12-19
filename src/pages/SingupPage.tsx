import React, { useState } from 'react';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here
    if (password === confirmPassword) {
      setStatusMessage("회원가입이 완료되었습니다!");
    } else {
      setStatusMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="page-layout">
      <div className="svg-container">
        {/* SVG 이미지 넣을 곳 */}
        <svg>/* SVG 코드 */</svg>
        <p className="todo-text">Sign Up</p>
      </div>

      <div className="login-container">
        {/* Sign Up Title */}
        <div className="login-title">회원가입</div>

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
          회원가입
        </button>

        {/* 로그인하러 가기 */}
        <div className="signup-link">
          이미 계정이 있으신가요? <a href="/login">로그인 하러 가기</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

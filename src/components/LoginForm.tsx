import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Swagger에서 확인한 엔드포인트 사용
      const response = await axios.post('http://3.39.232.214/api/v1/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data.data;

        // 토큰 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        alert('로그인 성공!');
        navigate('/home'); // 성공 시 홈으로 이동
      }
    } catch (error: any) {
      // 에러 처리
      if (error.response) {
        alert(error.response.data.message); // 서버에서 온 에러 메시지
      } else {
        alert('로그인 요청에 문제가 발생했습니다.');
      }
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import '../styles/MyPage.css';
import settingPic from '../styles/Setting.png'; // 경로에 맞게 import
import Feeditem from '../components/Feeditem';

const Feedpage: React.FC = () => {

    const [activePage, setActivePage] = useState('마이'); // 기본값 '마이'
    // 네비게이션 클릭 핸들러
    const handleNavClick = (page: string) => setActivePage(page);

    return(
    <div className="mypage-container">
    {/* Header */}
    <div className="header">
        <div className="header-logo">
          {activePage} {/* 로고 자리에 현재 페이지 이름 표시 */}
        </div>
        <div className="nav-links">
          <a
            href="#"
            onClick={() => handleNavClick('홈')}
            className={activePage === '홈' ? 'active' : ''}
          >
            홈
          </a>
          <a
            href="#"
            onClick={() => handleNavClick('둘러보기')}
            className={activePage === '둘러보기' ? 'active' : ''}
          >
            둘러보기
          </a>
          <a
            href="#"
            onClick={() => handleNavClick('알림')}
            className={activePage === '알림' ? 'active' : ''}
          >
            알림
          </a>
          <a
            href="#"
            onClick={() => handleNavClick('설정')}
            className={activePage === '설정' ? 'active' : ''}
          >
            설정
          </a>
        </div>
        <img src={settingPic} alt="Setting" className="header-pic" />
      </div>

      {/* Sidebar */}
      <div className="sidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="custom-icon-home">
        <path d="M5 13.2596C5 11.9019 5 11.223 5.27446 10.6262C5.54892 10.0295 6.06437 9.58769 7.09525 8.70407L8.09525 7.84693C9.95857 6.2498 10.8902 5.45123 12 5.45123C13.1098 5.45123 14.0414 6.2498 15.9047 7.84693L16.9047 8.70407C17.9356 9.58769 18.4511 10.0295 18.7255 10.6262C19 11.223 19 11.9019 19 13.2596V17.5C19 19.3856 19 20.3284 18.4142 20.9142C17.8284 21.5 16.8856 21.5 15 21.5H9C7.11438 21.5 6.17157 21.5 5.58579 20.9142C5 20.3284 5 19.3856 5 17.5V13.2596Z" stroke="#33363F" stroke-width="2"/>
        <path d="M14.5 21.5V16.5C14.5 15.9477 14.0523 15.5 13.5 15.5H10.5C9.94772 15.5 9.5 15.9477 9.5 16.5V21.5" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="menu-item">홈</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="custom-icon-search">
        <circle cx="12" cy="12.5" r="9" stroke="#222222" stroke-width="2"/>
        <path d="M8.52302 9.08442L9.99248 14.4724C9.99714 14.4895 10.0105 14.5029 10.0276 14.5075L15.4156 15.977C15.4529 15.9872 15.4872 15.9529 15.477 15.9156L14.0075 10.5276C14.0029 10.5105 13.9895 10.4971 13.9724 10.4925L8.58442 9.02302C8.54709 9.01284 8.51284 9.04709 8.52302 9.08442Z" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
        <path d="M13 11.5L11 13.5" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div className="menu-item">둘러보기</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="custom-icon-alarm">
        <path d="M6.44784 9.46942C6.76219 6.64032 9.15349 4.5 12 4.5V4.5C14.8465 4.5 17.2378 6.64032 17.5522 9.46942L17.804 11.7356C17.8072 11.7645 17.8088 11.779 17.8104 11.7933C17.9394 12.9169 18.3051 14.0005 18.8836 14.9725C18.8909 14.9849 18.8984 14.9973 18.9133 15.0222L19.4914 15.9856C20.0159 16.8599 20.2782 17.297 20.2216 17.6559C20.1839 17.8946 20.061 18.1117 19.8757 18.2668C19.5971 18.5 19.0873 18.5 18.0678 18.5H5.93223C4.91268 18.5 4.40291 18.5 4.12434 18.2668C3.93897 18.1117 3.81609 17.8946 3.77841 17.6559C3.72179 17.297 3.98407 16.8599 4.50862 15.9856L5.08665 15.0222C5.10161 14.9973 5.10909 14.9849 5.11644 14.9725C5.69488 14.0005 6.06064 12.9169 6.18959 11.7933C6.19123 11.779 6.19283 11.7645 6.19604 11.7356L6.44784 9.46942Z" stroke="#222222" stroke-width="2"/>
        <path d="M9.10222 18.9059C9.27315 19.6501 9.64978 20.3077 10.1737 20.7767C10.6976 21.2458 11.3396 21.5 12 21.5C12.6604 21.5 13.3024 21.2458 13.8263 20.7767C14.3502 20.3077 14.7269 19.6501 14.8978 18.9059" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div className="menu-item">알림</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="custom-icon-my">
        <circle cx="12" cy="10.5" r="3" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="12.5" r="9" stroke="#33363F" stroke-width="2"/>
        <path d="M17.7805 19.3264C17.9076 19.2566 17.9678 19.1055 17.914 18.9708C17.5284 18.0045 16.7856 17.1534 15.7814 16.5332C14.6966 15.8632 13.3674 15.5 12 15.5C10.6326 15.5 9.30341 15.8632 8.21858 16.5332C7.21444 17.1534 6.4716 18.0045 6.08598 18.9708C6.03223 19.1055 6.09236 19.2566 6.21948 19.3264C9.81971 21.303 14.1803 21.303 17.7805 19.3264Z" fill="#33363F"/>
        </svg>
        <div className="menu-item">마이</div>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* feed */}
        <div>
          <Feeditem />
          <Feeditem />
        </div>
        <div></div>
     </div>

      
   
      
    </div>
    )
};

export default Feedpage;
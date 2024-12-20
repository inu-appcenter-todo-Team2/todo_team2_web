import React, { useState } from "react";
import todoicon from "../styles/Union.png"
import fullhearticon from "../styles/Favorite_fill.png"
import "../styles/Calendar.css"; // CSS 파일 import

function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const daysInMonth = [];
  for (let day = 1; day <= endOfMonth.getDate(); day++) {
    daysInMonth.push(day);
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar-container">
      {/* 헤더 */}
      <div className="calendar-header">
        <h1>
          {currentDate.getFullYear()}
          {"년 "}
          {currentDate.toLocaleString("default", { month: "long" })}
        </h1>
        <span className="calendar-header-item">
          <img src={todoicon} alt="ShouldDo" className="todo-pic" />
          <h4>32</h4>
        </span>
        <span className="calendar-header-item">
          <img src={fullhearticon} alt="fullheart" className="heart-pic" />
          <h4>32</h4>
        </span>
        <button onClick={handlePrevMonth}>{"<"}</button>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>

      {/* 요일 */}
      <div className="calendar-weekdays">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* 날짜 */}
      <div className="calendar-days">
        {/* 빈 공간 추가 */}
        {Array(startOfMonth.getDay())
          .fill(null)
          .map((_, index) => (
            <div key={index}></div>
          ))}

        {/* 날짜 표시 */}
        {daysInMonth.map((day) => (
          <div className="calendar-day" key={day}>
            <span>{day}</span>
            {/* 날짜 아래에 추가 요소 */}
            <img src={todoicon} alt="ShouldDo" className="todo-pic" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomCalendar;

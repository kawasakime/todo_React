import React from "react";

const BUTTONS = [
  { title: "Все", filter: "all" },
  { title: "Активные", filter: "active" },
  { title: "Выполненные", filter: "completed" },
];

const Footer = ({ setFilter, currentFilter, counter }) => {
  const handleClick = (e, filter) => {
    e.preventDefault();

    setFilter(filter);
  };

  return (
    <div className="footer">
      <div className="footerContent">
        <p className="footerText">Задач: {counter}</p>
        <div className="footerBtns">
          {BUTTONS.map((btn, i) => (
            <button
              key={i}
              onClick={(e) => handleClick(e, btn.filter)}
              className={`footerFilter ${
                currentFilter === btn.filter && "active"
              }`}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

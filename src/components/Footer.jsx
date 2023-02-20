import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className="footerContent">
            <p className="footerText">{`${props.counter} записи`}</p>
            <div className="footerBtns">
                <button className="footerFilter">Все</button>
                <button className="footerFilter">Активные</button>
                <button className="footerFilter">Выполненные</button>
            </div>
        </div>
        </div>
    );
};

export default Footer;
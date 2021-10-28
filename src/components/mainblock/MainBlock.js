import React from 'react';
import s from './mainblock.module.css'
import Calendar from "../calendar/Calendar";

const MainBlock = () => {
    return (
        <div className={s.container}>
            <div className={s.someText}>
                <div className={s.titleWrapper}>
                    <p className={s.title}>choose the day for the meeting</p>
                </div>
                <div className={s.descriptionWrapper}>
                    <p className={s.description}>We encourage you to book your appointment online. This will save you time.</p>
                </div>
            </div>
            <div className={s.calendar}><Calendar /></div>
        </div>
    );
};

export default MainBlock;
import React from 'react';
import s from './calendarTitle.module.css'

const CalendarTitle = () => {

    return (
        <div className={s.container}>
            <div className={`${s.arrow} + ${s.left}`} />
            <div className={s.nameOfMonth}>
                october 2021
            </div>
            <div className={`${s.arrow} + ${s.right}`} />
        </div>
    );
};

export default CalendarTitle;
import React from 'react';
import moment from "moment";
import s from "./calendar.module.css";

const CalendarFooter = () => {

    return (
        <div  className={s.footerContainer}>
            {[...Array(7)].map((_, i) => (
               <div key={i}
                   className={s.dayOfWeek}>
                   {moment().day(i + 1).format('ddd')}
               </div>
            ))}
        </div>
    );
};

export default CalendarFooter;
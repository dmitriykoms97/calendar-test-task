import React from 'react';
import moment from "moment/moment";
import CalendarGrid from "./CalendarGrid";

const Calendar = () => {

    window.moment = moment;

    moment.updateLocale('en', {week: {dow: 1}})
    const startDay = moment().startOf('month').startOf('week')
    const endDay = moment().endOf('month').endOf('week')

    const day = startDay.clone();

    const calendar = []

    while (!day.isAfter(endDay)) {
        calendar.push(day.clone())
        day.add(1, 'day')
    }

   /* const newArray = [[...Array(7).map((calendar) => {
        calendar
    })]]*/

    return (
        <div>
            <CalendarGrid startDay={startDay}/>
        </div>
    );
};

export default Calendar;
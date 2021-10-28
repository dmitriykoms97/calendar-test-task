import React from 'react';
import s from './calendar.module.css'
import moment from "moment";
import Cell from "./Cell";
import CalendarFooter from "./CalendarFooter";
import CalendarTitle from "./CalendarTitle";

const CalendarGrid = ({startDay}) => {

    /*const [activeLink, setActiveLink] = useState(false)

    const onClickHandler = (i) => {
        setActiveLink(true)
    }*/

    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day')
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
    const isCurrentDay = (day) => moment().isSame(day, 'day')
    const isCurrentMonth = (day) => moment().isSame(day, 'month')



    return (
        <div>
            <CalendarTitle />
            <Cell daysArray={daysArray}
                  isCurrentDay={isCurrentDay}
                  isCurrentMonth={isCurrentMonth}
            />
            <CalendarFooter/>
        </div>
    );
};

export default CalendarGrid;
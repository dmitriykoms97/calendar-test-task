import React, {useState} from 'react';
import s from "./calendar.module.css";
import ModalWindow from "../modalWindow/modalWindow";
import moment from "moment";

const Cell = ({daysArray, isCurrentDay, isCurrentMonth}) => {

    const [modalActive, setModalActive] = useState(false)
    const [chosenDay, setChosenDay] = useState(null)
    const [chosenMonth, setChosenMonth] = useState(null)

    const closeModal = () => {
        setModalActive(false)
    }
    console.log(daysArray)


    return (
        <div className={s.gridContainer}>
            {
                daysArray.map((dayItem, i) => (
                        !isCurrentDay(dayItem) ?
                            <div key={i}
                                 onClick={() => {
                                     setModalActive(true)
                                     setChosenDay(String(dayItem._d).substr(0, 10))
                                     setChosenMonth(String(dayItem._d).substr(4, 3))
                                 }}
                                 className={isCurrentMonth(dayItem) ? s.cellContainer : s.cellNotCurrentMonth}>
                                {dayItem.format('D')}
                            </div> :
                            isCurrentDay(dayItem) &&
                            <div key={i}
                                 onClick={() => {
                                     setModalActive(true)
                                     setChosenDay(String(dayItem._d).substr(0, 10))
                                     setChosenMonth(String(dayItem._d).substr(0, 10))
                                 }}
                                 className={s.activeContainer}>
                                {dayItem.format('D')}
                            </div>
                    )
                )
            }
            {modalActive && <ModalWindow daysArray={daysArray}
                                         closeModal={closeModal}
                                         chosenDay={chosenDay}
                                         chosenMonth={chosenMonth}
                                         isCurrentMonth={isCurrentMonth}/>}
        </div>
    );
};

export default Cell;
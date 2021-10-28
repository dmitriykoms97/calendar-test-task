import React from 'react';
import s from './modalWindow.module.css'

const ModalWindow = ({closeModal, chosenDay, chosenMonth}) => {

    return (
        <div className={s.modalContainer}>
            <div className={s.modalContent}>
                <div className={s.labelContainer}>
                    <label>Month</label>
                    <input value={chosenMonth} type="text" className={s.inputFields}/>
                </div>
                <div className={s.labelContainer}>
                    <label>Day</label>
                    <input value={chosenDay} type="text" className={s.inputFields}/>
                </div>
                <button className={s.closeBtn} onClick={closeModal}>x</button>
            </div>
        </div>
    );
};

export default ModalWindow;
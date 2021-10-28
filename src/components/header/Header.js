import React from 'react';
import s from './header.module.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <div className={s.yellowElement}>
                    <div className={s.letters}>
                        <span>w</span>
                        <span>e</span>
                    </div>
                </div>
                <div className={s.title}>
                    <span className={s.R}>R</span>devs
                </div>
            </div>
            <nav className={s.linkGroup}>
                <Link exact to='/' className={s.link}>home</Link>
                <Link to='/about' className={s.link}>about us</Link>
            </nav>
        </div>
    );
};

export default Header;
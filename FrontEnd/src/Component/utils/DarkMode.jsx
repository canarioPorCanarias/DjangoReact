import React from 'react';
import '../../assets/css/Themes/buttontheme.css'
export default function DarkMode() {

    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";

    let theme;


    if (window.localStorage) {

        theme = window.localStorage.getItem("theme");

    }

    if (theme === lightTheme || theme === darkTheme) {

        body.setAttribute('data-theme', theme);

    } else {

        body.setAttribute('data-theme', "light");

    }

    const switchTheme = (e) => {
        if (e.target.checked === true) {
            body.setAttribute('data-theme', darkTheme);
            window.localStorage.setItem("theme", "dark");
            theme = darkTheme;
           
        } else {
            body.setAttribute('data-theme', lightTheme);
            window.localStorage.setItem("theme", "light");
            theme = lightTheme;
            
        }


    }

    return (

        <div className="toggleWrapper">
            <input type="checkbox" className="dn" id="dn" onChange={(e) => switchTheme(e)} />
            <label htmlFor="dn" className="toggle">
                <span className="toggle__handler">
                    <span className="crater crater--1"></span>
                    <span className="crater crater--2"></span>
                    <span className="crater crater--3"></span>
                </span>
                <span className="star star--1"></span>
                <span className="star star--2"></span>
                <span className="star star--3"></span>
                <span className="star star--4"></span>
                <span className="star star--5"></span>
                <span className="star star--6"></span>
            </label>
        </div>


    );

}

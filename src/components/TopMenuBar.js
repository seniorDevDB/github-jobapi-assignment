import React from 'react';
import Toggle from "./Toggler"

function Logo() {
    return (
      <div className="logo">
        <h3>devjobs</h3>
      </div>
    );
}

function TopMenuBar({theme, toggleTheme}) {
    return (
        <div className="top-menubar">
            <Logo />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default TopMenuBar;
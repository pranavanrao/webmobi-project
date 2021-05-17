import React, { useState } from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { VscGraph } from 'react-icons/vsc';
import { RiTeamFill, RiFolderChartLine } from 'react-icons/ri';
import { DiGoogleAnalytics } from 'react-icons/di';

function SideLeft() {
    return(
        <section className="main-left">
            <div className="left-icon-div" style={{ backgroundColor: "rgb(201, 79, 201)" }}>
                <AiFillAppstore className="left-icon" style={{ color: "white" }} />
                <span className="left-icon-text" style={{ color: "white" }} >WebMobi</span>
            </div>
            <div className="left-icon-div">
                <VscGraph className="left-icon" />
                <span className="left-icon-text">Event</span>
            </div>
            <div className="left-icon-div">
                <RiTeamFill className="left-icon" />
                <span className="left-icon-text">Teams</span>
            </div>
            <div className="left-icon-div">
                <DiGoogleAnalytics className="left-icon" />
                <span className="left-icon-text">Analytics</span>
            </div>
            <div className="left-icon-div">
                <RiFolderChartLine className="left-icon" />
                <span className="left-icon-text">Results</span>
            </div>
        </section>
    );
}

export default SideLeft;
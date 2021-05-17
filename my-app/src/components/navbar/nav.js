import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {

    const [isActive, setActive] = useState("Live Polls");

    const onToggle = (currentActive) => {
        setActive(currentActive);
    }

    return(
        <section className="nav">
            <Link to="/" style={{ textDecoration: "none" }}><div className={isActive === "Live Polls" ? "nav-sub-1" : "nav-sub"} onClick={() => {onToggle("Live Polls")}}>
                <span className="nav_title">Live Polls</span>
            </div></Link>
            <Link to="/AudienceQnA" style={{ textDecoration: "none" }}><div className={isActive === "Audience" ? "nav-sub-1" : "nav-sub"} onClick={() => onToggle("Audience")}>
                <span className="nav_title">Audience Q&A</span>
            </div></Link>
            <Link to="/Ideas" style={{ textDecoration: "none" }}><div className={isActive === "Ideas" ? "nav-sub-1" : "nav-sub"} onClick={() => onToggle("Ideas")}>
                <span className="nav_title">Ideas</span>
            </div></Link>
            <Link to="/Analytics" style={{ textDecoration: "none" }}><div className={isActive === "Analytics" ? "nav-sub-1" : "nav-sub"} onClick={() => onToggle("Analytics")}>
                <span className="nav_title">Analytics</span>
            </div></Link>
        </section>
    );
}

export default Nav;
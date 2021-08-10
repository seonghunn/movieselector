import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                MovieSelector 1.1
            </span>
            <span>1.0 at 2021.08.10</span>
        </div>
    );
}

export default About;
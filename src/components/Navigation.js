import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        </div>
    )
}//a 태그는 페이지를 전체 새로고침--> link

export default Navigation;
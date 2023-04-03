import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import user from "./user.jpg"

const Title = () => {
    return (
        <h1>Namaste React🚀</h1>
    )
}

const Heading = () => {
    return (
    <>
        <div className="head">
        <Title />
        <h1>Hello React</h1>
        </div>
    </>
    )
};

const Header = () => {
    return (
    <>
        <header className="header" >
            <div className="left">
                <img scr={logo.jpg} alt="logo" />
            </div>
            <div className="middle">
                <input type="text" className="search" placeholder="Search anything you want..." />
                <button type="submit">Submit</button>
            </div>
            <div className="right">
                <img src={user.jpg} alt="user"/>

            </div>
        </header>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    <>
        <header className="header" >
            <div className="left">
                <img scr= {logo.jpg} alt="logo" />
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
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
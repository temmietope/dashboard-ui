import React from "react";
import "./SideBar.css"

const SideBar = ({ employees }) => {
    return (
        <div className="side-bar">

            <section className="welcome">
                <img src={employees[1].avatar_url} alt="img"/>
                <span><p>Welcome Essie</p> Super Admin </span>
            </section>
            <section className="list">
                <ul>
                    <li><span><i className="fab fa-dochub" />Overview</span></li>
                    <li><span><i className="fas fa-puzzle-piece" />Reservation</span></li>
                    <li><span><i className="fas fa-address-card" />Meeting</span></li>
                    <li><span><i className="fab fa-affiliatetheme" />Customers</span></li>
                    <li><span><i className="fas fa-otter" />Ticket</span></li>
                    <li><span><i className="fab fa-atlassian" />Message</span></li>
                    <li><span><i className="fas fa-hat-wizard" />Profile</span></li>
                </ul>
            </section>
            <section className="logout">
                <span><i className="fas fa-power-off" />Logout</span>
            </section>
        </div>
    )
}

export default SideBar
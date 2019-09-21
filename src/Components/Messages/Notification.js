import React from "react"

const Notification = ({ employees }) => {
    return (
        <div className="notification">
            <span className="group-call">
                <img src={employees[5].avatar_url} alt="img" />
                <span>
                    <p className="header">Sales Presentation - Live Group Call</p>
                    <p className="email">adams_ka@gmail.com</p>
                    <p className="time">Started 3 mins ago</p>
                </span>
            </span>
            <span className="highlights">
                <span className="letters">
                    <p className="a">A</p>
                    <p className="k">K</p>
                    <p className="d">D</p>
                    <p className="v">V</p>
                </span>
                <p className="more">+5 more</p>
            </span>
            <span className="invitation">
                <button>You're invited</button>
            </span>
            <span className="join">
                <button><span><i className="fas fa-video" />Join Now</span></button>
            </span>


        </div>
    )
}

export default Notification
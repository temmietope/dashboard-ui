import React from "react"
import SideBar from "../SideBar"
import Messages from "../Messages"
import "./Home.css"

const Home = ({ employees }) => {
    return (
        <div className="home">
            <SideBar employees={employees} />
            <Messages employees={employees} />
        </div>
    )
}

export default Home
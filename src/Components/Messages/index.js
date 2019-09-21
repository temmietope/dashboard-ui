import React from "react"
import MessagesNavigation from "./MessagesNavigation"
import Notification from "./Notification"
import MessagesSummary from "./MessagesSummary";
import MessagesList from "./MessagesList"
import "./Messages.css"

const Messages = ({ employees }) => {
    return (
        <div className="messages">
            <MessagesNavigation />
            <Notification employees={employees} />
            <MessagesSummary />
            <MessagesList employees={employees} />

        </div>
    )
}

export default Messages
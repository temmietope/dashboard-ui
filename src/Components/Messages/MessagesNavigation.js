import React from "react"

const MessagesNavigation = () => {
    return (
        <nav className="messages-navigation">
            <span className="header">Messages</span>
            <span className = "pages">
                <i className="fas fa-chevron-left" />
                <span>1-50 pages</span>
                <i className="fas fa-chevron-right" />
            </span>
            <span className="all"><button>All</button></span>
            <span className="unread"><button>Unread</button></span>
            <span className = "important"><button>Important</button></span>
        </nav>
    )
}

export default MessagesNavigation
import React from "react"

const MessagesSummary = () => {
    return (
        <div className="messages-summary">
            <section>
                <i className="far fa-comments" />
                <span>
                    <p className="header">Overall Messages</p>
                    <p><span className="numbers">2389</span> <span className="month">This month</span></p>
                </span>
            </section>
            <section>
                <i className="fas fa-paper-plane" />
                <span>
                    <p className="header">Sent Messages</p>
                    <p><span className="numbers">1494</span> <span className="month">This month</span></p>
                </span>
            </section>
            <section>
                <i className="fas fa-reply" />
                <span>
                    <p className="header">Received Messages</p>
                    <p><span className="numbers">895</span> <span className="month">This month</span></p>
                </span>
            </section>
        </div>
    )
}

export default MessagesSummary
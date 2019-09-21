import React from "react";
import "./Navigation.css"

const Navigation = ({ employees }) => {
    const renderNavigation = () => {
        return (
            <div className="nav-bar">
                <nav>
                    <section className="brand-name">
                        <span>BOARDASH</span>
                    </section>
                    <section className="search-input">
                        <input type="text" placeholder="Search message, people, ticket" />
                        <span><i className="fas fa-search"></i></span>
                    </section>
                    <section className="info">
                        <span className="set-alert"><i className="far fa-bell"></i>Set Alert</span>
                        <span className="admin">
                            <img src={employees[1].avatar_url} alt="img"/>
                            <span className="admin-name">Essie Howell</span>
                            <span><i className="fas fa-plus"></i></span>
                        </span>

                    </section>
                </nav>
            </div>
        )
    }
    return (
        <>
            {renderNavigation()}
        </>

    )
}

export default Navigation

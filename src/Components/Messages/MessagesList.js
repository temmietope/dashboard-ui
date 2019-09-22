import React from "react"

const MessagesList = ({employees}) =>{
    return (
        <div className="messages-list">
            {employees.map((employee)=>{
                return(
                    <div key={employee.id} className="employee">
                        <section className="checkbox">
                                <input type="checkbox" name="employee" className="checkbox" />
                        </section>
                        <section>
                            <img src={employee.avatar_url} alt="img"/>
                        </section>
                        <section className="sender">
                            <span>{employee.login}</span>
                        </section>
                        <section className="message-details">
                            <span className="category">{employee.category}</span>
                            <span className="message-info">{employee.message_info}</span>
                        </section>
                        <section>
                            <span className="ellipsis"><i className="fas fa-ellipsis-v" /></span>
                        </section>


                    </div>
                )
            })}
        </div>
    )
}

export default MessagesList
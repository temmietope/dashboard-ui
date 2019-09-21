import React from "react"

const MessagesList = ({employees}) =>{
    return (
        <div>
            {employees.map((employee)=>{
                return(
                    <div key={employee.id} className="employee">
                        <section className="checkbox">
                                <input type="checkbox" name="employee" className="checkbox" />
                        </section>
                        <section>
                            <img src={employee.avatar_url} alt="img"/>
                        </section>
                        <section>
                            <span>{employee.login}</span>
                        </section>
                        <section>
                            <span>{employee.category}</span>
                            <span>{employee.message_info}</span>
                        </section>
                        <section>
                            <span>...</span>
                        </section>


                    </div>
                )
            })}
        </div>
    )
}

export default MessagesList
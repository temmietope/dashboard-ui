import React, { useState, useEffect } from 'react';
import Navigation from "./Components/Navigation/index"
import Home from './Components/Home';
import "./App.css";
import { category, message_info } from "./utils/constants"


const App = () => {
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    async function fetchEmployees() {
      setIsLoading(true)
      const response = await fetch("https://api.github.com/search/users?q=location%3Anigeria&per_page=7");
      const json = await response.json();
      const data = await json.items;
      console.log(data)
      return data
    }
    fetchEmployees().then(res => {
      res.forEach((employee, index) => {
        employee.category = category[index];
        employee.message_info = message_info[index]
      })
      setEmployees(res)
      setIsLoading(false)
    })
  }, [])
  const renderPage = () => {
    return (
      <div className="app">
        <div className="wrapper">
          <Navigation employees={employees} />
          <Home employees={employees} />
        </div>
      </div>
    )
  }

  const renderLoading = () => {
    return (
      <div className="loading"> <img src="./images/loading.svg" alt="loading" /></div>
    )
  }
  return (
    <>
      {/* {employees.length && renderPage()} */}
      {isLoading ? 
        renderLoading() : 
        employees.length && renderPage()}
    </>
  );
}

export default App;

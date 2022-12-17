import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
import Data from './Data';

const Dashboard = () => {
  const [value, setValue] = useState("");
  const [num, setNum] = useState(8);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const handleNum = (e) => {
    setNum(e.target.value)
  }

  // const onSearch = (searchTerm) => {
  //   setValue(searchTerm);
  // }
  return (
    <>
      <div className="wrapper_main">
        <div className="top">
          <h1>Dashboard</h1>
        </div>
        <div className="middle">
          <div className="middle_left">
            <div className="left_left">Show</div>
            <div className="left_center"> <input type="number" value={num} onChange={handleNum} /> </div>
            <div className="left_right">entries</div>
          </div>
          <div className="middle_right">
            <div className="right_left">
              <input type="search" placeholder='search by name...' value={value} onChange={onChange} />
            </div>
            {/* <button onClick={() => onSearch(value)}><FaSearch /></button> */}
            <div className="right_right">
              <NavLink to="/adddata">
                <button>Add New</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="main_bottom">
          <Data value={value} num={num}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
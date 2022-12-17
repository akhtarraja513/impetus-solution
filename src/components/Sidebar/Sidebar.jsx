import React, { useState } from 'react'
import { FaBars, FaCommentAlt, FaHome, FaTh, FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: "Dashboard",
      icon: <FaHome />
    },
    {
      path: '/approve',
      name: "Approve",
      icon: <FaTh />
    },
    {
      path: '/contactus',
      name: "ContactUs",
      icon: <FaCommentAlt/>
    },
    {
      path: '/members',
      name: "Members",
      icon: <FaUserAlt />
    },
  ]
  return (
    <div className='container'>
      <div style={{width: isOpen ? "250px" : "47px"}} className="sidebar">
        <div  className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
          <div className="bar">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((ele, idx) => (
            <NavLink to={ele.path} key={idx} className='link' activeclassName="active">
              <div className="icon">{ele.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{ele.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar;
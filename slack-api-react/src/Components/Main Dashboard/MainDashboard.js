import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainNavBar from './MainNavBar/MainNavBar'
import MainBody from './MainBody/MainBody'
import './MainDashBoard.css'


function MainDashboard() {
    return (
        <div className={"Main-DashBoard"}>
            <div className={"sidebarHolder"}><Sidebar /></div>
            <div className={"headerbarHolder"}><MainNavBar /></div>
            <div className={"MainBodyHolder"}><MainBody /></div>
        </div>
    )
}

export default MainDashboard

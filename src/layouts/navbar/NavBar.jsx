import React, { useContext, useState } from 'react'
import UserImg from '../../assets/user2-160x160.jpg'

import { ThemeContext } from '../AppLayout'

function NavBar() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const { openSidebar, setOpenSidebar, sidebarCollapsed, setSidebarCollapsed } = useContext(ThemeContext)
    const handleSidebarBehaiours = () => {
        window.innerWidth >= 991 ? setSidebarCollapsed(!sidebarCollapsed) : setOpenSidebar(!openSidebar)
    }
    const handleFullScreen = () => {
       document.fullscreenElement == null ? document.body.requestFullscreen() : document.exitFullscreen() 
    }
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link" data-widget="pushmenu" href="#" role="button" onClick={handleSidebarBehaiours}><i className="fas fa-bars"></i></span>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <span className="nav-link" data-widget="fullscreen" role="button" onClick={handleFullScreen}>
                            <i className="fas fa-expand-arrows-alt"></i>
                        </span>
                    </li>


                    <li className={`nav-item dropdown ${openDropdown ? 'show' : ''}`} onClick={() => setOpenDropdown(!openDropdown)}>

                        <div className="user-panel d-flex">
                            <div className="info">
                                <span className="d-block">Alexander Pierce</span>
                            </div>
                            <div className="image">
                                <img src={UserImg} className="img-circle" alt="User Image" />
                            </div>
                        </div>



                        <div className={`dropdown-menu dropdown-menu-md dropdown-menu-right  ${openDropdown ? 'show' : ''}`}>

                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> Setting
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> Profile
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> Logout
                            </a>

                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
import React,{useContext} from 'react'
import Logo from '../../assets/AdminLTELogo.png'
import UserImg from '../../assets/user2-160x160.jpg'
import SidebarItems from './SidebarItems'
import { ThemeContext } from '../AppLayout'

import menuItem from '../sidebar/sidebar.json'

function Sidebar() {
    const {openSidebar, setOpenSidebar} = useContext(ThemeContext)
    const menu = [
        {
            title: "Dashboard",
            icon: "fas fa-tachometer-alt",
            path: "#"
        }
    ]
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
            <a href="#" className="brand-link d-flex align-items-center justify-content-between">
                <div>
                    <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </div>
                <i className="fas fa-times mr-3" id='sidebarCollapse' onClick={() => setOpenSidebar(!openSidebar)}></i>
            </a>

            {/* <!-- Sidebar --> */}
            <div className="sidebar">

                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {
                            menuItem.map((item, index) => {
                                return <SidebarItems key={index} item={item} />
                            })
                        }
                    </ul>
                </nav>
                {/* <!-- /.sidebar-menu --> */}
            </div>
            {/* <!-- /.sidebar --> */}
        </aside>
    )
}

export default Sidebar
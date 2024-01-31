import React, { useEffect, useState, createContext } from 'react'
import NavBar from './navbar/NavBar'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'
import ContentHeader from './content-header/ContentHeader'

export const ThemeContext = createContext()

function AppLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    const handleResize = () => {
        window.innerWidth < 991 ? setOpenSidebar(false) : setOpenSidebar(true)

        if (window.innerWidth > 768 && window.innerWidth < 991) { setSidebarCollapsed(true) }
        else {
            setSidebarCollapsed(false)
        }
    }
    useEffect(() => {
        openSidebar ? (document.body.classList.add('sidebar-open'), document.body.classList.remove('sidebar-close')) : (document.body.classList.remove('sidebar-open'), document.body.classList.add('sidebar-close'))
        sidebarCollapsed ? document.body.classList.add('sidebar-collapse') : document.body.classList.remove('sidebar-collapse')
    }, [openSidebar, sidebarCollapsed])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ openSidebar, setOpenSidebar, sidebarCollapsed, setSidebarCollapsed }}>
            <div className='wrapper'>
                {/* navbar :: begin*/}
                <NavBar />
                {/* navbar :: end*/}

                {/* sidebar :: begin */}
                <Sidebar />
                {/* sidebar :: end */}

                {/* content :: begin */}


                <div className="content-wrapper">
                    {/* content header :: begin */}
                    <ContentHeader />
                    {/* content header :: end */}

                    {/* main content :: begin */}
                    <div className="content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    {/*  */}
                </div>

                {/* content :: end */}

                {/* footer :: begin */}
                <Footer />
                {/* footer :: end */}
                <div id="sidebar-overlay" style={{ display: openSidebar ? "block" : "none" }} onClick={() => setOpenSidebar(false)}></div>

            </div>
        </ThemeContext.Provider>
    )
}

export default AppLayout
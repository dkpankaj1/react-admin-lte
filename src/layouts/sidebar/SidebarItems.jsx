import React, { useState } from 'react'

function SidebarItems({ item }) {

    const [open, setOpen] = useState(false);
    // const [active, setActive] = useState(active);


    if (item.sub) {
        return (
            <li className={`nav-item  ${open ? 'menu-open ' : ''}`} onClick={() => setOpen(!open)}>
                <a  className="nav-link" style={{cursor: 'pointer'}}>
                    <i className={`nav-icon ${item.icon}`}></i>
                    <p>
                    {item.title}
                        <i className="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul className="nav nav-treeview">
                {item.sub.map((subItem, index) => (
                    <li className="nav-item" key={index}>
                        <a href={subItem.title} className="nav-link">
                            <i className="fas fa-angle-right nav-icon"></i>
                            <p>{subItem.title}</p>
                        </a>
                    </li>
                ))}
                </ul>
            </li>
        )
    } else {
        return (
            <li className={`nav-item  ${open ? 'menu-open ' : ''}`}>
                <a href="#" className="nav-link ">
                    <i className={`nav-icon ${item.icon}`}></i>
                    <p>{item.title}</p>
                </a>
            </li>
        )
    }
}

export default SidebarItems
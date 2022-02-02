import React from 'react';
import './sidebaritems.scss'

function SidebarItems({text, Icon}) {
    return <div className="sidebar-item">
        <Icon />
        <h2>{text}</h2>
  </div>;
}

export default SidebarItems;

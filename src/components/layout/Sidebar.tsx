// Sidebar.js (ou NavSidebar.js, por exemplo)
import React from 'react';
import styles from './Sidebar.module.css';
import Navibar from './Navibar/Navibar';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Navibar />
        </aside>
    );
}

export default Sidebar;

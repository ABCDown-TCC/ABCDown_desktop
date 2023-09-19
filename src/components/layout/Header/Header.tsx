// components/PageHeader.js
import React from 'react';
import styles from './Header.module.css'
import Notifications from '../icons/notifications.svg'

interface HeaderProps {
    title: string; // Defina o tipo apropriado para o título, por exemplo, string.
    color?: string
}

function Header({ title, color = '#3393C3' }: HeaderProps) {
    return (
        <div className={styles.container_title_page} style={{ backgroundColor: color }}>
            <h1 className={styles.title_page}>{title}</h1>
            <img src={Notifications} className={styles.image_notifications} />

        </div>
    )

}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
    icon: string;
    to?: string;
    label?: string;
    className?: string;
    onClick?: () => void;
    classNameImg?: string;
    style?: React.CSSProperties;
}

function NavItem({ icon, to, label, className, onClick, classNameImg, style }: NavItemProps) {
    const linkContent = (
        // <React.Fragment>
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%', gap:'10%', }}>
        <img src={icon} alt={label} className={classNameImg ? styles[classNameImg] : ''} style={style} />
        <span className={styles.label}>{label}</span>
      </div>
        // </React.Fragment>
    );

    if (to) {
        return (
            <Link to={to} className={`${styles.navItem} ${styles.link} ${className ? styles[className] : ''}`}>
                {linkContent}
            </Link>
        );
    } else {
        return (
            <div onClick={onClick} className={`${styles.navItens} ${className ? styles[className] : ''}`}>
                {linkContent}
            </div>
        );
    }
}

export default NavItem;

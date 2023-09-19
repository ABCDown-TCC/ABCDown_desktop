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
        <React.Fragment>
            <img src={icon} alt={label} className={classNameImg ? styles[classNameImg] : ''} style={style} />
            <span className={styles.label}>{label}</span> {/* Use <span> to apply styles to the label */}
        </React.Fragment>
    );

    if (to) {
        return (
            <Link to={to} className={`${styles.navItem} ${styles.link} ${className ? styles[className] : ''}`}>
                {linkContent}
            </Link>
        );
    } else {
        return (
            <div onClick={onClick} className={`${styles.navItem} ${className ? styles[className] : ''}`}>
                {linkContent}
            </div>
        );
    }
}

export default NavItem;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerCard.module.css';

interface ContainerCardProps {
    backgroundImage?: string;
    width?: string;
    height?: string;
    text?: string;
    description?: string;
    link?: string; // URL do link
}

function ContainerCard(props: ContainerCardProps) {
    const { backgroundImage, width, height, text, description, link } = props;

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        width: width,
        height: height,
    };

    const containerCardClasses = `${styles.containerCard}`;

    const renderContent = () => (
        <div className={styles.content}>
            <h2 className={styles.custom_text}>{text}</h2>
            <p className={styles.custom_description}>{description}</p>
        </div>
    );

    return (
        <div className={containerCardClasses} style={containerStyle}>
            {link ? (
                <a href={link} style={{ width: '100%', height: '100%', display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    {renderContent()}
                </a>
            ) : (
                renderContent()
            )}
        </div>
    );
}

export default ContainerCard;

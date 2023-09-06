import React from 'react';
import styles from './ContainerShareAbout.module.css';

interface ContainerShareAboutProps {
    width?: string;
    height?: string;
    text?: string;
    description?: string;
    imageSrc?: string;
    imageClass?: string; // Nova propriedade para a classe da imagem
}

function ContainerShareAbout(props: ContainerShareAboutProps) {
    const { width, height, text, description, imageSrc, imageClass } = props;

    const containerCardClasses = `${styles.containerCard}`;

    return (
        <div className={containerCardClasses} style={{ width, height }}>
            <div className={styles.content}>
                <h2 className={styles.custom_text}>{text}</h2>
                <p className={styles.custom_description}>{description}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%',width:'100%'}}>
                {imageSrc && <img src={imageSrc} alt="Card Image" className={imageClass} />}
            </div>
        </div>
    );
}

export default ContainerShareAbout;

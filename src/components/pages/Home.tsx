import React from 'react';
import Header from '../layout/Header/Header';
import imageComunidade from '../layout/img_containers_cards/comunidade.png'
import imageTurmas from '../layout/img_containers_cards/turmas.png'
import ImageAtividade from '../layout/img_containers_cards/atividade.png'
import ImageSobreAbcdown from '../layout/img_containers_cards/logo.png'
import ImageCompartilhar from '../layout/img_containers_cards/compartilhar.png'
import ContainerCard from '../layout/container_card/ContainerCard'; // Verifique o caminho correto para o arquivo
import ContainerShareAbout from '../layout/container_card/ContainerShareAbout';
import styles from '../layout/container_card/ContainerShareAbout.module.css';


import { Link } from 'react-router-dom';

function Home() {
    const heigthCommunity: string = '25vh';
    const widthCommunity:string = '85%';

    const widthClassActivity: string = '41%';
    const heigthClassActivity: string = '35vh';

   
     const widthAboutShare:string = '41%';
     const heigthAboutShare:string ='20vh';
    return (

        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centralizar horizontalmente o conteúdo
                backgroundColor: '#f2f2f2', // Cor de fundo de exemplo
                width: '100%',

            }}>
                <Header title="Home" />


                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centralizar horizontalmente o conteúdo
                    justifyContent: 'center', // Distribuir espaço entre os elementos
                    gap:'4%',
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'pink',
                }}>


                    <ContainerCard

                        backgroundImage={imageComunidade}
                        text="Comunidade"
                        description="Obtenha atividades de outros professores"
                        link="/comunidade"
                        width= {widthCommunity}
                        height= {heigthCommunity}
                    />



                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 'max-content',
                        alignItems: 'center',
                        justifyContent: 'center',
                        //backgroundColor: 'red',
                        gap: '50px'
                    }}>


                        <ContainerCard
                            backgroundImage={imageTurmas}
                            text="Turmas"
                            description="crie,edite e selecione turmas"
                            link="/turmas"
                            width= {widthClassActivity}
                            height= {heigthClassActivity}

                        />




                        <ContainerCard
                            backgroundImage={ImageAtividade}
                            text="Atividades"
                            link=""
                            description="acompanhe suas ativiadades"
                            width= {widthClassActivity}
                            height= {heigthClassActivity}
                        />

                    </div>



                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 'max-content',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'red',
                        gap: '50px'
                    }}>
                        <ContainerShareAbout
                            width={widthAboutShare}
                            height={heigthAboutShare}
                            text="Sobre o ABCDown"
                            description="Conheça mais à respeito do nosso APP!"
                            imageSrc={ImageSobreAbcdown}
                            imageClass={styles.imageAboutAbcdown}  // Classe da imagem personalizada
                        />

                        <ContainerShareAbout
                            width={widthAboutShare}
                            height={heigthAboutShare}
                            text="Compartilhar"
                            description="Gostou do ABCDown? Compartilhe com amigos!"
                         imageSrc={ImageCompartilhar}
                        imageClass={styles.imageShare} // Classe da imagem personalizada
                        />
                    </div>


                </div>







            </div>
        </>
    );
}

export default Home;

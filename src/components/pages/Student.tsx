import Header from "../layout/Header/Header";
import UserDetails from "../layout/ConfigurationComponents/UserDetails";
import { useState } from "react";





const imageStudent = (
    <div
        style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "white",
            border: "2px solid white",
        }}
    >
        <img
            src="img/test" // Certifique-se de que o caminho da imagem esteja correto
            style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center center", // Ajuste este valor conforme necessário
            }}
        />
    </div>
);

interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void; // Especificando o tipo da propriedade onClick
}

function Tab({ label, active, onClick }: TabProps) {
    return (
        <span
            onClick={onClick}
            style={{
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                color: active ? '#43B1B1' : '#000',
                borderBottom: active ? '2px solid #43B1B1' : '#000',
                paddingBottom: '10px',
                width: 'max-content',
                fontSize: '1.5rem',
            }}
        >
            {label}
        </span>
    );
}




function TarefasDeCasa() {
    return (
        <div>
            <h1>Tarefas de Casa</h1>
            {/* Conteúdo da tela de Tarefas de Casa */}
        </div>
    );
}



function Desempenho() {
    return (
        <div>
            <h1>Desempenho</h1>
            {/* Conteúdo da tela de Desempenho */}
        </div>
    );
}



function Responsavel() {
    return (
        <div>
            <h1>Responsável</h1>
            {/* Conteúdo da tela de Responsável */}
        </div>
    );
}





function Student() {
    const [activeTab, setActiveTab] = useState("Tarefas de casa");

    function toggleTab(tabName: string) {
        // Adicione o tipo 'string' aqui
        setActiveTab(tabName);
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100vh",
                    flexDirection: "column",
                    backgroundColor: '#43B1B1'

                }}
            >
                <Header title="" color="#43B1B1" />
                <UserDetails height="20%" color="#43B1B1">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "30px",
                            marginLeft: "3%",
                            width: "max-content",
                        }}
                    >
                        {imageStudent}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Conteúdo adicional aqui */}
                        </div>
                    </div>
                </UserDetails>

                <div
                    style={{
                        width: "100%",
                        height: "80%", display: 'flex', flexDirection: 'column'
                        // backgroundColor: "#43B1B1",

                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "15%",
                            backgroundColor: "white",
                            display: 'flex',
                            flexDirection: 'row',
                            borderTopLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            alignItems: 'flex-end',
                            justifyContent: 'center',


                        }}
                    >

                        <div style={{ width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Tab
                                label="Tarefas de Casa"
                                active={activeTab === "Tarefas de Casa"}
                                onClick={() => toggleTab("Tarefas de Casa")}
                            />

                            <Tab
                                label="Desempenho"
                                active={activeTab === "Desempenho"}
                                onClick={() => toggleTab("Desempenho")}
                            />

                            <Tab
                                label="Responsável"
                                active={activeTab === "Responsável"}
                                onClick={() => toggleTab("Responsável")}
                            />

                        </div>
                    </div>
                    <div style={{ width: '100%', height: '85%', backgroundColor: 'white' }}>
                        {activeTab === 'Tarefas de Casa' && <TarefasDeCasa />}
                        {activeTab === 'Desempenho' && <Desempenho />}
                        {activeTab === 'Responsável' && <Responsavel />}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Student;

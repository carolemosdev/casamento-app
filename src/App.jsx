import { useState } from "react";
import { FiCheckSquare, FiCoffee, FiGift, FiHome } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import CountdownTimer from "./CountdownTimer.jsx";
import RSVPForm from "./RSVPForm.jsx";
import "./styles.css";
import TabContent from "./TabContent.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return window.location.hash.replace("#", "") || "rsvp";
  });

  const tabs = [
    { id: "rsvp", label: "Confirmação", icon: <FiCheckSquare /> },
    { id: "presentes", label: "Presentes", icon: <FiGift /> },
    { id: "cartorio", label: "Cartório", icon: <FiHome /> },
    { id: "recepcao", label: "Recepção", icon: <FiCoffee /> },
  ];

  return (
    <div className="container">
      <div className="content-wrapper">
        <header>
          <h1> Lívia & Carolina </h1>
          <p>CONTAGEM REGRESSIVA PARA O NOSSO GRANDE DIA:</p>
          <div className="countdown-timer-container">
            <CountdownTimer />
          </div>
        </header>

        <ul className="tab-menu">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.history.pushState(null, "", `#${tab.id}`);
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          <TabContent tabId="cartorio" activeTab={activeTab}>
            <h2>Localização do Cartório</h2>
            <p>
              <strong>Local:</strong> Cartório de Registro Civil de Guanacés
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63670.17739531186!2d-38.369936494393166!3d-4.144235123609942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8bde0e95cd017%3A0x52fd8b839dd77587!2sCart%C3%B3rio%20de%20Registro%20Civil%20de%20Guanac%C3%A9s!5e0!3m2!1spt-BR!2sbr!4v1762802889113!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Cartório"
            ></iframe>

            <a
              href="https://www.google.com/maps/dir//Cart%C3%B3rio+de+Registro+Civil+de+Guanac%C3%A9s+-+R.+Eufr%C3%A1sio+Dantas,+614+-+Guanac%C3%A9s,+Cascavel+-+CE,+62850-000/@-4.1452186,-38.3216163,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x7b8bde0e95cd017:0x52fd8b839dd77587!2m2!1d-38.3287366!2d-4.1443218!3e0?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              Traçar Rota
            </a>
          </TabContent>

          <TabContent tabId="recepcao" activeTab={activeTab}>
            <h2>Localização da Recepção</h2>
            <p>
              <strong>Local:</strong> Casa Mãe da Noiva
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.459910560548!2d-38.24452602497694!3d-4.12953944534439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b897374f9e4a37%3A0xac696df5c5f82201!2sR.%20Samuel%20Bed%C3%AA%2C%202745%20-%20Centro%2C%20Cascavel%20-%20CE%2C%2062850-000!5e0!3m2!1spt-BR!2sbr!4v1762802450876!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Recepção"
            ></iframe>

            <a
              href="https://www.google.com/maps/dir//R.+Samuel+Bed%C3%AA,+2745+-+Centro,+Cascavel+-+CE,+62850-000/@-4.1295394,-38.244526,17z/data=!4m17!1m8!3m7!1s0x7b897374f9e4a37:0xac696df5c5f82201!2sR.+Samuel+Bed%C3%AA,+2745+-+Centro,+Cascavel+-+CE,+62850-000!3b1!8m2!3d-4.1295448!4d-38.2419511!16s%2Fg%2F11tf9tcs61!4m7!1m0!1m5!1m1!1s0x7b897374f9e4a37:0xac696df5c5f82201!2m2!1d-38.2419511!2d-4.1295448?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              Traçar Rota
            </a>
          </TabContent>

          <TabContent tabId="rsvp" activeTab={activeTab}>
            <h2>Confirmação de Presença</h2>
            <RSVPForm />
          </TabContent>

          <TabContent tabId="presentes" activeTab={activeTab}>
            <h2>Lista de Presentes</h2>
            <p>
              Sua presença é o nosso maior presente! Se desejar nos presentear,
              preparamos uma lista com sugestões para facilitar sua escolha.
            </p>
            <p>
              Para ver nossa lista completa de sugestões, clique no link abaixo:
            </p>

            <a
              href="https://docs.google.com/spreadsheets/d/1A7CzOQBuRePKqbw0AyZq1rtZk45R9lVTZCnqohquXLw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="gift-btn"
            >
              <FiGift size={20} />
              Acessar Nossa Lista de Presentes
            </a>

            <h3 style={{ marginTop: "30px" }}>Cotas de Lua de Mel / PIX</h3>
            <p>
              Ajude-nos a realizar a viagem dos sonhos ou use a praticidade do
              PIX:
            </p>
            <div className="pix-container">
              <p className="pix-text">
                Chave PIX: <strong>(85) 99802-7939</strong>
              </p>
              <button
                className="pix-btn"
                onClick={() => {
                  navigator.clipboard.writeText("(85) 99802-7939");
                  alert("Chave PIX copiada com sucesso!");
                }}
              >
                Copiar Chave PIX
              </button>
            </div>
            <a
              href="https://wa.me/5585998027939?text=Olá!%20Gostaria%20de%20falar%20sobre%20o%20casamento%20de%20Lívia%20e%20Carolina."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp size={22} />
              Entrar em Contato pelo WhatsApp
            </a>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default App;

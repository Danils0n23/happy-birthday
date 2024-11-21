import styled from "styled-components";

// Definindo cores e fontes para reutilização
const COLORS = {
  primary: "#d6336c", // Rosa para o fundo
  accent: "#fff", // Branco para o texto
  hover: "#e20b6a", // Cor de fundo no hover
};

const FooterContainer = styled.div`
  font-size: 1.5rem; // Aumentando o tamanho da fonte para maior destaque
  color: ${COLORS.accent};
  background: ${COLORS.primary};
  padding: 20px;
  border-radius: 15px;
  margin-top: auto;
  text-align: center;
  max-width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Sombra suave para dar destaque

  // Animação suave de desvanecimento
  opacity: 0;
  animation: fadeIn 2s forwards;

  // Transições suaves
  transition: background-color 0.3s ease, transform 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // Efeito de hover para destacar o fundo e a transformação
  &:hover {
    background: ${COLORS.hover}; // Cor de fundo mais intensa quando o mouse passa
    cursor: pointer; // Mostrar cursor de ponteiro
    transform: scale(1.05); // Leve aumento de tamanho ao passar o mouse
  }

  .heart-icon {
    font-size: 2rem; // Ícone maior
    margin-left: 10px;
    animation: heartBeat 1.5s infinite; // Efeito de "bater" do coração
    display: inline-block; // Garantir que o ícone esteja no mesmo nível do texto
    transform-origin: center; // Origem da transformação no centro
  }

  // Animação de "bater" do coração
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  // Responsividade para telas menores
  @media (max-width: 768px) {
    font-size: 1.25rem; // Reduz o tamanho da fonte em telas menores
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem; // Reduz ainda mais o tamanho da fonte
    padding: 10px;
  }
`;

const Footer = () => (
  <FooterContainer>
    Te amo <br /> com todo o meu amor, para sempre.
    <span className="heart-icon">💖</span> {/* Ícone de coração pulsante */}
  </FooterContainer>
);

export default Footer;

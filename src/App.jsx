import { useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import PhotoGallery from "./components/PhotoGallery";
import LoveMessages from "./components/LoveMessages";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Container principal
const LoginContainer = styled.div`
  font-family: "Arial, sans-serif";
  text-align: center;
  padding: 50px;
  background: url("/assets/images/imagem1.jpg") no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

// Estilo para a animação de fundo
const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 105, 180, 0.6),
    rgba(255, 69, 158, 0.6)
  );
  z-index: -1;
  animation: gradientAnimation 5s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background: linear-gradient(
        45deg,
        rgba(255, 105, 180, 0.6),
        rgba(255, 69, 158, 0.6)
      );
    }
    50% {
      background: linear-gradient(
        45deg,
        rgba(255, 105, 180, 0.8),
        rgba(255, 69, 158, 0.8)
      );
    }
    100% {
      background: linear-gradient(
        45deg,
        rgba(255, 105, 180, 0.6),
        rgba(255, 69, 158, 0.6)
      );
    }
  }
`;

// Componente para a tela de boas-vindas
const WelcomeMessage = styled.div`
  position: absolute;
  top: 10%;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  z-index: 1;
  animation: welcomeAnimation 3s ease-out infinite;

  @keyframes welcomeAnimation {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

const App = () => {
  const audioRef = useRef(null);

  // Efeito para tocar a música ao acessar o componente
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Toca a música automaticamente ao montar o componente
    }
  }, []);

  return (
    <div>
      {/* Player de áudio */}
      <audio ref={audioRef} loop>
        <source src="/assets/audio/music.mp3" type="audio/mp3" />
        Seu navegador não suporta o áudio.
      </audio>

      <LoginContainer>
        <WelcomeMessage>Feliz Aniversário, minha linda!</WelcomeMessage>

        {/* Aqui podemos integrar os componentes desejados */}
        <Header />
        <PhotoGallery />
        <LoveMessages />

        <Footer />
      </LoginContainer>
      <AnimatedBackground />
    </div>
  );
};

export default App;

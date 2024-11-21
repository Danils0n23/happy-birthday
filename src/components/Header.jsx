import styled from "styled-components";
import { motion } from "framer-motion";

// Definindo cores e fontes para reutilização
const COLORS = {
  primary: "#d6336c", // Rosa para o título
  secondary: "#ff8f8f", // Tom suave de rosa
  background: "#fff", // Branco para o fundo
  shadow: "rgba(0, 0, 0, 0.15)", // Sombra suave
};

const Title = styled(motion.h1)`
  font-size: 3.5rem; // Aumenta o tamanho para dar mais destaque
  color: ${COLORS.primary};
  margin-top: 30px;
  font-family: "Poppins", sans-serif; // Fonte mais moderna e elegante
  font-weight: 800; // Aumenta a espessura para maior destaque
  text-align: center; // Centraliza o título
  ); // Gradiente sutil no fundo
  padding: 15px;
  border-radius: 12px; // Bordas arredondadas para suavizar o visual
  box-shadow: 0 15px 30px ${COLORS.shadow}; // Sombra mais intensa para dar profundidade

  // Transição para o título
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  // Efeito de hover para interação
  &:hover {
    transform: scale(1.1); // Aumenta o título ao passar o mouse
    box-shadow: 0 20px 50px ${COLORS.shadow}; // Aumenta a sombra ao passar o mouse
  }

  // Responsividade para telas menores
  @media (max-width: 768px) {
    font-size: 2.5rem; // Ajusta o tamanho para telas menores
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 2rem; // Ajuste ainda maior para telas pequenas
    padding: 8px;
  }
`;

const Header = () => {
  return (
    <Title
      initial={{ opacity: 0, scale: 0.8 }} // Inicia com opacidade 0 e escala reduzida
      animate={{ opacity: 1, scale: 1 }} // Aparece com opacidade 100% e escala normal
      transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 120,
        damping: 25,
      }} // Transição fluida com "spring"
    >
      Feliz Aniversário, Meu Amor! 🎉
    </Title>
  );
};

export default Header;

import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px; // Limitar a largura do container
  margin: 0 auto; // Centralizar horizontalmente
  animation: slideIn 1.5s ease-in-out; // Animação de deslizar para dentro
  text-align: center;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Message = styled.p`
  font-size: 1.4rem;
  color: #333;
  line-height: 1.6;
  font-weight: 500;
  margin: 0;
  padding: 0 10px;
  transition: transform 0.3s ease-in-out, color 0.3s ease;

  &:hover {
    transform: scale(1.05); // Efeito de aumento ao passar o mouse
    color: #d6336c; // Cor mais intensa ao passar o mouse
  }
`;

const LoveMessages = () => {
  const messages = [
    "Você é a razão do meu sorriso todos os dias!",
    "Eu amo cada momento que passamos juntos.",
    "Feliz aniversário para o amor da minha vida!",
    "Estar ao seu lado é o melhor presente que a vida me deu.",
    "Cada dia ao seu lado é um novo capítulo de felicidade.",
    "Com você, a vida é mais bonita a cada momento.",
    "Meu coração é seu, e sempre será. 💖",
    "Você ilumina minha vida com seu amor e carinho.",
    "Você faz o meu mundo inteiro ser mais colorido.",
    "Amo sua risada, seu olhar e tudo o que você faz.",
    "Juntos somos imparáveis, nossa felicidade é infinita.",
    "Cada segundo ao seu lado é um presente, meu amor!",
    "Você é meu porto seguro, meu abrigo, meu tudo.",
    "Meu amor por você só cresce a cada dia que passa.",
    "Que sorte a minha de ter você em minha vida. 💕",
    "Você é o sonho que virou realidade na minha vida!",
    "Com você, eu sou feliz e completo. Para sempre ao seu lado!",
  ];

  return (
    <MessageContainer>
      {messages.map((text, index) => (
        <Message key={index}>{text}</Message>
      ))}
    </MessageContainer>
  );
};

export default LoveMessages;

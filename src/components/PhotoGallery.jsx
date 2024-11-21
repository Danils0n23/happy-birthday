import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

// Container que exibe as imagens ou vídeos
const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  position: relative; /* Para posicionar os botões de navegação */
`;

// Wrapper que define o tamanho e o estilo das mídias
const MediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  max-width: 600px; /* Responsivo, limite máximo de 600px */
  height: 400px; /* Definido como uma altura fixa */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative; /* Para posicionar o conteúdo dentro */
`;

// Estilo para o conteúdo da mídia (imagem ou vídeo)
const Media = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;

  img,
  video {
    width: 100%; /* Responsivo, ajusta conforme o tamanho do contêiner */
    height: 100%; /* Ajuste automático de altura */
    object-fit: cover; /* Garante que as imagens e vídeos cubram o espaço sem distorção */
  }
`;

// Estilo dos botões de navegação
const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  ${(props) =>
    props.direction === "left"
      ? "left: 10px;"
      : "right: 10px;"}/* Define a posição dos botões */
`;

const photos = [
  "/assets/videos/video1.mp4",
  "/assets/videos/video2.mp4",
  "/assets/videos/video3.mp4",
  "/assets/videos/video4.mp4",
  "/assets/videos/video5.mp4",
  "/assets/videos/video6.mp4",
  "/assets/videos/video7.mp4",
  "/assets/videos/video8.mp4",
  "/assets/videos/video9.mp4",
  "/assets/images/imagem1.jpg",
  "/assets/images/imagem2.jpg",
  "/assets/images/imagem3.jpg",
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para o próximo item
  const nextMedia = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Função para ir para o item anterior
  const prevMedia = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // Configuração do swipeable (deslizar)
  const handlers = useSwipeable({
    onSwipedLeft: nextMedia, // Quando o usuário desliza para a esquerda
    onSwipedRight: prevMedia, // Quando o usuário desliza para a direita
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Permite rastrear o gesto com o mouse (para desktop também)
  });

  // Efeito para mudar a mídia a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(nextMedia, 2000); // Muda a mídia a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const src = photos[currentIndex];
  const isVideo = src.endsWith(".mp4");

  return (
    <div>
      <Gallery {...handlers}>
        <Button onClick={prevMedia} direction="left">
          {"<"}
        </Button>
        <MediaWrapper>
          <Media>
            {isVideo ? (
              <video controls autoPlay muted>
                <source src={src} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            ) : (
              <img src={src} alt={`Mídia ${currentIndex + 1}`} />
            )}
          </Media>
        </MediaWrapper>
        <Button onClick={nextMedia} direction="right">
          {">"}
        </Button>
      </Gallery>
    </div>
  );
};

export default PhotoGallery;

/* =====================================================================
   CONFIG DO CONVITE  —  edite SÓ este arquivo
   Convite: Pedro Landim & Abraão Landim — 1 aninho (20/12 17h)
   Tema: brinquedos aventureiros (paleta azul céu / vermelho / amarelo / verde)
   ===================================================================== */
window.CONVITE = {

  /* ---- identidade ---- */
  titulo: "Pedro & Abraão - 1 aninho",   // aparece na aba do navegador
  corFundo: "#2f6db0",                    // azul "caixa de brinquedos" (bordas no desktop)

  /* ---- música de fundo (opcional: arquivo: null para desligar) ---- */
  musica: {
    arquivo: "musica.mp3",
    volume: 0.20,
    ligadaNoInicio: true
  },

  /* ---- capa: primeira tela, com o "clique para começar" ---- */
  capa: {
    imagem: "capa.jpg",
    chamada: "Clique para começar",
    corChamada: "#fff3c4"
  },

  /* ---- vídeo de abertura (opcional: arquivo: null para pular) ---- */
  video: {
    arquivo: "video.mp4",
    textoPular: "Pular abertura",
    mostrarBotaoPular: true
  },

  /* ---- páginas do convite -----------------------------------------------
     Página única (arte 9:16) com os botões por cima.
     Ajustar left/top/width/height (%) depois que a arte final estiver pronta,
     usando o editor.html ou o modo #debug.
  ----------------------------------------------------------------------- */
  paginas: [
    {
      imagem: "pagina1.jpg",
      botoes: [
        { rotulo: "Confirmar presença",
          href: "https://wa.me/558888232559?text=Ol%C3%A1!%20Confirmo%20presen%C3%A7a%20no%201%C2%BA%20anivers%C3%A1rio%20do%20Pedro%20e%20do%20Abra%C3%A3o%20%F0%9F%8E%89",
          left: 14, top: 79, width: 22, height: 14 },
        { rotulo: "Localização",
          href: "https://www.google.com/maps/dir//Travessuras+Buffet,+R.+Apolo+%E2%85%AA,+106+-+Santo+Ant%C3%B4nio,+Juazeiro+do+Norte+-+CE,+63050-170/@-7.2135043,-39.3281053,17z",
          left: 38.5, top: 79, width: 22, height: 14 },
        // abre a imagem de sugestões de presentes (se tiver); senão troque por href
        { rotulo: "Sugestões de presentes", acao: "imagem", imagem: "presentes.jpg",
          left: 63.5, top: 79, width: 22, height: 14 }
      ]
    }
  ],

  /* ---- contagem regressiva (opcional) ---- */
  contagem: {
    ativa: false,
    data: "2026-12-20T17:00:00-03:00",
    pagina: 1,
    left: 10, top: 60, width: 80,
    cor: "#ffffff",
    fonte: "Georgia, serif"
  },

  /* ---- navegação ---- */
  navegacao: {
    setas: true,
    bolinhas: true,
    toqueAvanca: true
  }
};

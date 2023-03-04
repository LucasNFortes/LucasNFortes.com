// Verifica se o usuário está acessando o site por um dispositivo móvel
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Se o usuário estiver acessando o site por um dispositivo móvel, redireciona para a página mobile
if (isMobile) {
  window.location.href = "./mobile/index-mobile.html";
}

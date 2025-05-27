function votar(livro) {
  // Envia o voto para o Apps Script
  fetch('https://script.google.com/macros/s/AKfycbwRq03rmyrSi_vHC4_ZoHiMfEMOe8CvOh0YfCcCziwmKDWbhgz2LuhI_2V-DwwKjncusA/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ livro: livro })
  });

  // Esconde a tela de votação
  document.querySelector('.book-container').style.display = 'none';
  document.querySelector('h1').style.display = 'none';

  // Mostra a tela de agradecimento
  const agradecimento = document.getElementById('agradecimento');
  agradecimento.style.display = 'flex';

  // Define a imagem correspondente
  const imagem = document.getElementById('imagemEscolhida');
  if (livro === 'CAPA 1') {
    imagem.src = 'pequeno_principe.jpg';  // espaço vira %20
  } else if (livro === 'CAPA 2') {
    imagem.src = 'chapeuzinho_vermelho.jpg';  // espaço vira %20
  }

  // Toca o áudio de agradecimento
  const audio = document.getElementById('audioAgradecimento');
  audio.play();

  // Quando o áudio termina, volta pra tela inicial
  audio.onended = () => {
    location.reload();
  };
}

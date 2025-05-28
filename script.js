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
  if (livro === 'O Pequeno Príncipe') {
    imagem.src = 'pequeno_principe.jpg';
  } else if (livro === 'Chapeuzinho Vermelho') {
    imagem.src = 'chapeuzinho_vermelho.jpg';
  }

  // Toca o áudio de agradecimento
  const audio = document.getElementById('audioAgradecimento');
  audio.play();

  // Quando o áudio termina, volta pra tela inicial
  audio.onended = () => {
    location.reload();
  };
}

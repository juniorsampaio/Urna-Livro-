function votar(livro) {
  fetch('https://script.google.com/macros/s/AKfycbwRq03rmyrSi_vHC4_ZoHiMfEMOe8CvOh0YfCcCziwmKDWbhgz2LuhI_2V-DwwKjncusA/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ livro: livro })
  });

  const audio = document.getElementById('audioAgradecimento');
  audio.play();

  audio.onended = () => {
    location.reload();
  };
}
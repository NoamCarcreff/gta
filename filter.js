function createNoiseFilter(canvas) {
  const ctx = canvas.getContext('2d');

  // Définir la taille du motif de bruit
  const size = 50;

  // Dessiner un motif de bruit aléatoire
  for (let x = 0; x < canvas.width; x += size) {
    for (let y = 0; y < canvas.height; y += size) {
      const value = Math.random() * 255;
      ctx.fillStyle = `rgba(${value}, ${value}, ${value}, 0.2)`;
      ctx.fillRect(x, y, size, size);
    }
  }

  // Créer le filtre CSS correspondant
  const filter = `url(${canvas.toDataURL()})`;

  // Appliquer le filtre à l'élément body
  document.body.style.filter = `url(${filter})`;
}

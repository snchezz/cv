$(document).ready(function () {
  $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function () {
  $('.sidenav').sidenav();
});


document.getElementById('shareButton').addEventListener('click', function () {
  // Verificar si el navegador soporta la API de Web Share
  if (navigator.share) {
    // Datos a compartir
    const data = {
      title: '¡Mira este CV!',
      text: 'Quiero compartirte este CV. Aquí tienes el enlace:',
      url: 'https://snchezz.github.io/cv/'
    };

    // Llamar a la API de Web Share
    navigator.share(data)
      .then(() => console.log('Contenido compartido exitosamente.'))
      .catch((error) => console.error('Error al compartir:', error));
  } else {
    // Si el navegador no soporta la API de Web Share, mostrar un mensaje alternativo
    alert('Tu navegador no soporta compartir contenido. Puedes copiar el enlace y compartirlo manualmente.');
  }
});
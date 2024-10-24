// Inicializar WOW.js
new WOW().init();

// Agregar eventos a los botones de referencia
document.querySelectorAll('.boton-ref').forEach((boton) => {
  boton.addEventListener('mouseover', () => {
    boton.style.transform = 'scale(1.1)';
  });
  boton.addEventListener('mouseout', () => {
    boton.style.transform = '';
  });
});
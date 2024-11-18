// Selección de elementos
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');

// Evento al hacer clic en el icono de hamburguesa
burger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase "active" para mostrar/ocultar el menú
});

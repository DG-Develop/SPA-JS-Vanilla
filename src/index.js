import router from './routes'

window.addEventListener('load', router) // Evento cuando carga por primera vez la pagina
window.addEventListener('hashchange', router) // Evento que esta a la escucha de cambios en el hash dentro de la url

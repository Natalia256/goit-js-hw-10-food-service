import itemsTemplate from '../templates/cards.hbs';
import menus from '../menu.json';
const markup = itemsTemplate(menus);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('afterbegin', markup);

import dishes from './menu.json';
import itemTemplate from './templates/dishes-cards.hbs';
import './js/change-theme.js';
import './styles.css';

const menuRef = document.querySelector('.js-menu');

const murkUp = itemTemplate(dishes);

menuRef.insertAdjacentHTML('beforeend', murkUp);
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './assets/style.scss';

import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Main from './components/Main';
import Item from './components/Item';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `
    ${Navbar().outerHTML}
    <div class="d-flex">
      ${Aside().outerHTML}
      ${Main().outerHTML}
      ${Item().outerHTML}
    </div>
  `;
  return element;
}

document.body.prepend(component());
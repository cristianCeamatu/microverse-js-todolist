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
import listener from './utils/listeners';

import { initializeState } from './state';

function App(state) {
  const element = document.createElement('div');

  element.innerHTML = `
    ${Navbar().outerHTML}
    <div class="d-flex">
      ${Aside(state).outerHTML}
    <div id="main-todos" class="border w-100">
      ${Main(state.todos)}
    </div>
      ${Item().outerHTML}
    </div>
  `;
  return element;
}

const state = initializeState();
document.body.appendChild(App(state));

listener.formToggler('#add-list-toggler', '#add-list-form');
listener.listFormSubmit('#add-list-form', state);
listener.listNavigation('.list-navigation', state);
listener.addTodoForm('#add-todo-form', state);
listener.checkboxListener(state);

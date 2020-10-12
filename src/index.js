import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './assets/style.scss';

import listeners from './utils/listeners';
import stateActions from './state';

import App from './components/App';

const state = stateActions.initializeState();

document.body.appendChild(App(state));

listeners.init();

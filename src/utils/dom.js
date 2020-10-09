import Main from '../components/Main';
import {
  initializeState,
} from '../state';

function setListTodos(list) {
  const state = initializeState();
  document.querySelector('#main-todos').innerHTML = Main(state.todos, list);
}

export default {
  setListTodos,
};
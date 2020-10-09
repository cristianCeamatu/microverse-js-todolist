import Main from '../components/Main';
import Item from '../components/Item';
import stateActions from '../state';

const state = stateActions.initializeState();

function setListTodos(list) {
  document.querySelector('#main-todos').innerHTML = Main(state.todos, list);
}

function toggleShowItem(id) {
  const todo = state.todos.find((el) => el.id === id);
  document.querySelector('#show-todo').classList.toggle('hide');
  document.querySelector('#show-todo').innerHTML = Item(todo);
}

export default {
  setListTodos,
  toggleShowItem,
};

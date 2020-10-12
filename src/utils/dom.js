import Main from '../components/Main';
import Item from '../components/Item';
import Aside from '../components/Aside';

const setListTodos = (list, state) => {
  document.querySelector('#main-todos').innerHTML = Main(state.todos, list);
};

const showItem = (id, state) => {
  const todo = state.todos.find((el) => el.id === id);
  document.querySelector('#show-todo').classList.remove('hide');
  document.querySelector('#show-todo').innerHTML = Item(todo);
};

const refreshAside = (state, activeList) => {
  document.querySelector('#aside-nav').innerHTML = Aside(state, activeList);
};

const refreshMain = (state, activeList) => {
  document.querySelector('#main-todos').innerHTML = Main(state.todos, activeList);
};

const updateMainAndAside = (state, activeList) => {
  refreshAside(state, activeList);
  refreshMain(state, activeList);
};

export default {
  setListTodos,
  showItem,
  refreshAside,
  refreshMain,
  updateMainAndAside,
};

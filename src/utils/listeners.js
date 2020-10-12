/* eslint-disable no-use-before-define */
import stateActions from '../state';

import dom from './dom';

let state = stateActions.initializeState();

const formToggler = () => {
  document.querySelector('#add-list-toggler').addEventListener('click', (e) => {
    e.preventDefault();

    e.target.classList.toggle('hide');
    document.querySelector('#add-list-form').classList.toggle('hide');
  });
};

const todoStatus = () => {
  document.querySelectorAll('.todo_toggle_status').forEach((el) => {
    el.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      stateActions.toggleStatus(id, state);

      e.target.nextElementSibling.classList.toggle('todo-done');
    });
  });
};

const editTodoFields = () => {
  document.querySelectorAll('.edit-todo').forEach((el) => {
    el.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-id');
      const { list } = state.todos.find(el => el.id === id);
      const field = e.target.getAttribute('data-field');
      const { value } = e.target;

      stateActions.editTodoField(id, field, value, state);

      state = stateActions.initializeState();

      if (['priority', 'dueDate', 'todo'].includes(field)) {
        dom.updateMainAndAside(state, list);

        init();
      }
    });
  });
};

const showTodoOnClick = () => {
  document.querySelectorAll('.show-todo-toggler').forEach((el) => {
    el.addEventListener('click', (e) => {
      state = stateActions.initializeState();

      const id = e.target.getAttribute('data-id');
      dom.showItem(id, state);

      editTodoFields();
    });
  });
};

const sideNavigation = () => {
  document.querySelectorAll('.list-navigation').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const list = e.target.getAttribute('data-list');

      dom.refreshMain(state, list);
      document.querySelector('#show-todo').innerHTML = '';

      document.querySelectorAll('.list-navigation.active').forEach(el => el.classList.remove('active'));
      document.querySelector(`.list-navigation[data-list="${list}"]`).classList.add('active');

      todoStatus();
      removeTodoButton();
      showTodoOnClick();
      if (list !== 'due-or-passed') addTodoForm(state);
    });
  });
};

const removeTodoButton = () => {
  document.querySelectorAll('.remove-todo').forEach((el) => {
    el.addEventListener('click', (e) => {
      stateActions.removeTodo(e.target.getAttribute('data-id'), state);
      const list = e.target.getAttribute('data-list');

      state = stateActions.initializeState();

      dom.updateMainAndAside(state, list);

      formToggler();
      sideNavigation(state);
      addListForm(state);
      todoStatus(state);
      removeTodoButton(state);
      showTodoOnClick(state);
      if (list !== 'due-or-passed') addTodoForm(state);
    });
  });
};

const addTodoForm = () => {
  document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const list = e.target.getAttribute('data-list').toLowerCase();
    stateActions.addTodo(
      {
        todo: e.target.elements.todo.value,
        list,
      },
      state,
    );

    state = stateActions.initializeState();

    dom.updateMainAndAside(state, list);

    document.body.querySelector(`.list-navigation[data-list='${list.toLowerCase()}'`).classList.add('active');

    init();
  });
};

const addListForm = () => {
  document.querySelector('#add-list-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.toLowerCase();
    stateActions.addList(name, state);
    e.target.classList.toggle('hide');

    state = stateActions.initializeState();

    dom.updateMainAndAside(state, name);

    document.body.querySelector(`.list-navigation[data-list='${name}'`).classList.add('active');

    init();
  });
};

const init = () => {
  formToggler();
  sideNavigation(state);
  addListForm(state);
  addTodoForm(state);
  todoStatus(state);
  removeTodoButton(state);
  showTodoOnClick(state);
};

export default {
  init,
};

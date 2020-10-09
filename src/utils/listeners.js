import {
  addList,
  addTodo,
  toggleStatus,
  removeTodo,
  initializeState
} from '../state';

import dom from './dom';

const state = initializeState();

function formToggler(clicker, element) {
  document.querySelector(clicker).addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('btn-info');
    document.querySelector(element).classList.toggle('hide');
  });

  return this;
}

function checkboxListener() {
  document.querySelectorAll('.todo_toggle_status').forEach((el) => {
    el.addEventListener('click', (e) => {
      toggleStatus(e.target.getAttribute('data-id'), state);
    });
  });

  return this;
}

function addTodoForm(clicker, state) {
  document.querySelector(clicker).addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo({
        todo: e.target.elements.todo.value,
        list: e.target.getAttribute('data-list'),
      },
      state
    );
  });

  return this;
}

function listNavigation(clicker) {
  document.querySelectorAll(clicker).forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelectorAll('aside a.active')[0].classList.remove('active');
      e.target.classList.add('active');

      dom.setListTodos(e.target.getAttribute('data-list'));
      checkboxListener(state);
      if (el.getAttribute('data-list') !== 'due-or-passed') {
        addTodoForm('#add-todo-form', state);
      }
    });
  });

  return this;
}

function listFormSubmit(form, state) {
  document.querySelector(form).addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    addList(name, state);
    e.target.reset();
  });

  return this;
}

function removeTodoListener() {
  document.querySelectorAll('.remove-todo').forEach((el) => {
    el.addEventListener('click', (e) => {
      removeTodo(e.target.getAttribute('data-id'), state);
    });
  });

  return this;
}

export default {
  formToggler,
  listNavigation,
  listFormSubmit,
  addTodoForm,
  checkboxListener,
  removeTodoListener,
};
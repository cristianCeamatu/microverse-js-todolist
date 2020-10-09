import stateActions from '../state';

import dom from './dom';

let state = stateActions.initializeState();

function formToggler(clicker, element) {
  document.querySelector(clicker).addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('hide');
    document.querySelector(element).classList.toggle('hide');
  });

  return this;
}

function checkboxListener() {
  document.querySelectorAll('.todo_toggle_status').forEach((el) => {
    el.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      stateActions.toggleStatus(id, state);

      e.target.nextElementSibling.classList.toggle('todo-done');
    });
  });

  return this;
}

function removeTodoListener() {
  document.querySelectorAll('.remove-todo').forEach((el) => {
    el.addEventListener('click', (e) => {
      stateActions.removeTodo(e.target.getAttribute('data-id'), state);

      state = stateActions.initializeState();
      const list = e.target.getAttribute('data-list');

      dom.setListTodos(list, state);
      dom.refreshAside(state, list);
      dom.refreshMain(state, list);
  
      listNavigation('.list-navigation', state);
      addTodoForm('#add-todo-form', state);
      checkboxListener(state);
      removeTodoListener(state);
      showTodoToggler();
      formToggler('#add-list-toggler', '#add-list-form');
    });
  });

  return this;
}

function editTodoFields() {
  document.querySelectorAll('.edit-todo').forEach((el) => {
    el.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-id');
      const { list } = state.todos.find(el => el.id === id);
      const field = e.target.getAttribute('data-field');
      const { value } = e.target;

      stateActions.editTodoField(id, field, value, state);

      state = stateActions.initializeState();

      if (['priority', 'dueDate', 'todo'].includes(field)) {
        dom.setListTodos(list, state);
        dom.refreshAside(state, list);
        dom.refreshMain(state, list);
    
        listNavigation('.list-navigation', state);
        addTodoForm('#add-todo-form', state);
        checkboxListener(state);
        removeTodoListener(state);
        showTodoToggler();
        formToggler('#add-list-toggler', '#add-list-form');
      }
    });
  });
}

function showTodoToggler() {
  document.querySelectorAll('.show-todo-toggler').forEach((el) => {
    el.addEventListener('click', (e) => {
      state = stateActions.initializeState();

      const id = e.target.getAttribute('data-id');
      dom.showItem(id, state);

      checkboxListener();
      editTodoFields();
    });
  });

  return this;
}

function listNavigation(clicker) {
  document.querySelectorAll(clicker).forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const list = e.target.getAttribute('data-list');
      dom.setListTodos(list, state);
      document.querySelector('#show-todo').innerHTML = '';

      document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
      document.querySelector(`.list-navigation[data-list="${list}"]`).classList.add('active');

      checkboxListener(state);
      removeTodoListener(state);
      showTodoToggler();

      if (el.getAttribute('data-list') !== 'due-or-passed') {
        addTodoForm('#add-todo-form', state);
      }
    });
  });

  return this;
}

function addTodoForm(clicker, state) {
  document.querySelector(clicker).addEventListener('submit', (e) => {
    e.preventDefault();
    const list = e.target.getAttribute('data-list');
    stateActions.addTodo(
      {
        todo: e.target.elements.todo.value,
        list,
      },
      state,
    );

    dom.setListTodos(list, state);
    dom.refreshAside(state, list);
    dom.refreshMain(state, list);

    listNavigation('.list-navigation', state);
    addTodoForm('#add-todo-form', state);
    addListForm('#add-list-form', state);
    checkboxListener(state);
    removeTodoListener(state);
    showTodoToggler();
    formToggler('#add-list-toggler', '#add-list-form');
  });

  return this;
}

function addListForm(form, state) {
  document.querySelector(form).addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    stateActions.addList(name, state);
    e.target.reset();

    dom.refreshAside(state, name);
    dom.refreshMain(state, name);

    formToggler('#add-list-toggler', '#add-list-form');
    addTodoForm('#add-todo-form', state);
    listNavigation('.list-navigation', state);
    addListForm('#add-list-form', state);
  });
}

export default {
  formToggler,
  listNavigation,
  addListForm,
  addTodoForm,
  checkboxListener,
  removeTodoListener,
  showTodoToggler,
};

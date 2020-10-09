import shortid from 'shortid';

function initializeState() {
  const state =
    localStorage.getItem('state') === null ?
    {
      todos: [],
      lists: [{
        name: 'default',
        todos: 0,
      }, ],
    } :
    JSON.parse(localStorage.getItem('state'));

  return state;
}

function addList(name, state) {
  if (!state.lists.some((el) => el.name === name.toLowerCase())) {
    state.lists.push({
      name: name.toLowerCase(),
      todos: 0,
    });
  }
  localStorage.setItem('state', JSON.stringify(state));
  location.reload();
}

function addTodo({
  todo,
  list
}, state) {
  console.log(todo, list, state);
  state.todos.push({
    id: shortid.generate(),
    todo,
    list,
  });
  state.lists.map((el) => {
    if (el.name === list) {
      el.todos += 1;
    }
  });
  localStorage.setItem('state', JSON.stringify(state));
  location.reload();
}

function toggleStatus(id, state) {
  state.todos.map((todo) => {
    if (todo.id === id) {
      todo.status = todo.status !== true;
    }
    return todo;
  });
  localStorage.setItem('state', JSON.stringify(state));
  console.log(state.todos.find((el) => el.id === id));
}

export {
  initializeState,
  addList,
  addTodo,
  toggleStatus
};
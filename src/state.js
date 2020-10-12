import shortid from 'shortid';

function initializeState() {
  const state =
    localStorage.getItem('state') === null
      ? {
          todos: [],
          lists: [
            {
              name: 'default',
              todos: 0,
            },
          ],
        }
      : JSON.parse(localStorage.getItem('state'));

  return state;
}

function addList(name, state) {
  const newState = state;

  if (!state.lists.some((el) => el.name === name.toLowerCase())) {
    newState.lists.push({
      name: name.toLowerCase(),
      todos: 0,
    });
  }

  localStorage.setItem('state', JSON.stringify(newState));
}

function addTodo({ todo, list }, state) {
  const newState = state;
  newState.todos.push({
    id: shortid.generate(),
    todo,
    list: list.toLowerCase(),
    priority: 'normal',
  });
  newState.lists.map((el) => {
    if (el.name === list.toLowerCase()) {
      el.todos += 1;
    }
    return el;
  });

  localStorage.setItem('state', JSON.stringify(newState));
}

function toggleStatus(id, state) {
  const newState = state;

  newState.todos.map((todo) => {
    if (todo.id === id) {
      todo.status = todo.status !== true;
    }
    return todo;
  });

  localStorage.setItem('state', JSON.stringify(newState));
}

function removeTodo(id, state) {
  const newState = state;

  const todo = newState.todos.find((todo) => todo.id === id);
  newState.todos = newState.todos.filter((el) => el.id !== id);
  newState.lists.map((list) => {
    if (list.name === todo.list) {
      list.todos -= 1;
    }
    return list;
  });

  localStorage.setItem('state', JSON.stringify(newState));
}

function editTodoField(id, field, value, state) {
  const newState = state;

  newState.todos.map((todo) => {
    if (todo.id === id) {
      todo[field] = value;
    }
    return todo;
  });

  localStorage.setItem('state', JSON.stringify(newState));
}

export default {
  initializeState,
  addList,
  addTodo,
  toggleStatus,
  removeTodo,
  editTodoField,
};

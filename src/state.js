import shortid from 'shortid';

const initializeState = () => {
  const state = localStorage.getItem('state') === null
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
};

const addList = (name, state) => {
  const newState = state;

  if (!state.lists.some((el) => el.name === name.toLowerCase())) {
    newState.lists.push({
      name: name.toLowerCase(),
      todos: 0,
    });
  }

  localStorage.setItem('state', JSON.stringify(newState));

  return newState;
};

const addTodo = ({ todo, list }, state) => {
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

  return newState;
};

const toggleStatus = (id, state) => {
  const newState = state;

  newState.todos.map((todo) => {
    if (todo.id === id) {
      todo.status = todo.status !== true;
    }
    return todo;
  });

  localStorage.setItem('state', JSON.stringify(newState));

  return newState;
};

const removeTodo = (id, state) => {
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

  return newState;
};

const editTodoField = (id, field, value, state) => {
  const newState = state;

  newState.todos.map((todo) => {
    if (todo.id === id) {
      todo[field] = value;
    }
    return todo;
  });

  localStorage.setItem('state', JSON.stringify(newState));

  return newState;
};

export default {
  initializeState,
  addList,
  addTodo,
  toggleStatus,
  removeTodo,
  editTodoField,
};

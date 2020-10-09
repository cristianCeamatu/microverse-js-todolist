function initializeState() {
  const state = (localStorage.getItem('state') === null) ? {
    todos: [],
    lists: [{
      name: 'default',
      todos: 0,
    }],
  } : JSON.parse(localStorage.getItem('state'));

  return state;
}

function addList(name, state) {
  state.lists.push({
    name: name.toLowerCase(),
    todos: 0,
  });
  localStorage.setItem('state', JSON.stringify(state));
  location.reload();
}

export {
  initializeState,
  addList,
};
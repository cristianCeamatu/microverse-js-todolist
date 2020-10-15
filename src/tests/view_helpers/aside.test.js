import {
  addedLists,
  itemsWithoutList,
  dueOrPassed,
  addActiveClass,
} from '../../view_helpers/aside';

describe('aside view helpers has the methods', () => {
  const defaultState = {
    lists: [
      { name: 'default', todos: 0 },
      { name: 'home', todos: 0 },
      { name: 'microverse', todos: 0 },
    ],
    todos: [
      {
        todo: 'third', id: 'x233', list: 'microverse', dueDate: '2020-02-13',
      },
      {
        todo: 'first', id: 'x231', list: 'default', dueDate: '2020-02-13',
      },
      {
        todo: 'second', id: 'x232', list: 'home', dueDate: '2030-11-13',
      },
    ],
  };

  it('addedLists() returns all lists except the `default` one', () => expect(addedLists(defaultState.lists)).toStrictEqual(
    defaultState.lists.slice(1),
  ));

  it('addedLists() returns an empty array when no parameter provided', () => expect(addedLists()).toStrictEqual([]));

  it('itemsWithoutList() returns the length of all todos from the `default` list', () => expect(itemsWithoutList(defaultState.todos)).toStrictEqual(1));

  it('itemsWithoutList() return 0 if no argument provided', () => expect(itemsWithoutList()).toStrictEqual(0));

  it('dueOrpassed() returns the length of all todos having a dueDate smaller then today', () => expect(dueOrPassed(defaultState.todos)).toStrictEqual(2));

  it('dueOrpassed() returns 0 if no argument provided', () => expect(dueOrPassed(defaultState.todos)).toStrictEqual(2));

  it('addActiveClass(activeList) returns `active` if activeList is `default`', () => expect(addActiveClass('default')).toStrictEqual('active'));

  it('addActiveClass(activeList) returns empty string if activeList is not `default`', () => expect(addActiveClass('urgent')).toStrictEqual(''));
});

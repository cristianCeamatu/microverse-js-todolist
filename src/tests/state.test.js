import state from '../state';

describe('state object has the methods:', () => {
  describe('initializeState()', () => {
    it('returs a default state if the localStorage `state` property is not defined', () => {
      const defaultState = {
        todos: [],
        lists: [
          {
            name: 'default',
            todos: 0,
          },
        ],
      };
      expect(state.initializeState()).toStrictEqual(defaultState);
    });

    it('returs the current state if the localStorage `state` property is defined (JSON.parse the localStorage result)', () => {
      const defaultState = {
        todos: [],
        lists: [
          {
            name: 'default',
            todos: 3,
          },
          {
            name: 'urgent',
            todos: 5,
          },
        ],
      };
      const localStorageState = JSON.stringify(defaultState);
      localStorage.setItem('state', localStorageState);

      expect(state.initializeState()).toStrictEqual({ ...defaultState });
    });
  });

  describe('addList(name, state)', () => {
    const defaultState = {
      todos: [],
      lists: [
        {
          name: 'default',
          todos: 3,
        },
        {
          name: 'early',
          todos: 0,
        },
      ],
    };

    it('should return the state with the list added', () => {
      expect(
        state
          .addList('early', defaultState)
          .lists.some((el) => el.name === 'early'),
      ).toStrictEqual(true);
    });

    it('should return the state with the new list added having zero todos', () => {
      expect(
        state
          .addList('early', defaultState)
          .lists.find((el) => el.name === 'early').todos,
      ).toStrictEqual(0);
    });

    it('should add the new item to the localStorage `state` variable', () => {
      expect(state.addList('early', defaultState)).toStrictEqual(
        JSON.parse(localStorage.getItem('state')),
      );
    });
  });

  describe('addTodo({ todo, list }, state)', () => {
    const defaultState = {
      todos: [],
      lists: [
        {
          name: 'default',
          todos: 3,
        },
      ],
    };

    it('should return the state with the todo added', () => {
      expect(
        state
          .addTodo({ todo: 'eat lunch', list: 'default' }, defaultState)
          .todos.some((el) => el.todo === 'eat lunch'),
      ).toStrictEqual(true);
    });

    it('should have a default priority of `normal`', () => {
      expect(
        state
          .addTodo({ todo: 'eat lunch', list: 'default' }, defaultState)
          .todos.find((el) => el.todo === 'eat lunch').priority,
      ).toStrictEqual('normal');
    });

    it('should have a default random generated id', () => {
      expect(
        state
          .addTodo({ todo: 'eat lunch', list: 'default' }, defaultState)
          .todos.find((el) => el.todo === 'eat lunch').id,
      ).toBeDefined();
    });

    it('should return the state with the list where the todo was added having the todos incremented by one', () => {
      const defaultState = {
        todos: [],
        lists: [
          {
            name: 'default',
            todos: 3,
          },
        ],
      };

      expect(
        state
          .addTodo({ todo: 'eat lunch', list: 'default' }, defaultState)
          .lists.find((el) => el.name === 'default').todos,
      ).toStrictEqual(4);
    });

    it('should add the new item to the localStorage `state` variable', () => {
      expect(
        state.addTodo({ todo: 'eat lunch', list: 'default' }, defaultState),
      ).toStrictEqual(JSON.parse(localStorage.getItem('state')));
    });
  });

  describe('toggleStatus(id, state)', () => {
    it('should return the state with the todo status toggled (when status false or undefined)', () => {
      const defaultState = {
        todos: [
          {
            id: '12',
            todo: 'first',
            list: 'default',
            priority: 'normal',
          },
        ],
        lists: [
          {
            name: 'default',
            todos: 1,
          },
        ],
      };

      expect(
        state
          .toggleStatus('12', defaultState)
          .todos.find((el) => el.id === '12').status,
      ).toStrictEqual(true);
    });

    it('should return the state with the todo status toggled (when status true)', () => {
      const defaultState = {
        todos: [
          {
            id: '12',
            todo: 'first',
            list: 'default',
            priority: 'normal',
            status: true,
          },
        ],
        lists: [
          {
            name: 'default',
            todos: 1,
          },
        ],
      };

      expect(
        state
          .toggleStatus('12', defaultState)
          .todos.find((el) => el.id === '12').status,
      ).toStrictEqual(false);
    });

    it('should toggle the status in the localStorage `state` variable', () => {
      const defaultState = {
        todos: [
          {
            id: '12',
            todo: 'first',
            list: 'default',
            priority: 'normal',
            status: true,
          },
        ],
        lists: [
          {
            name: 'default',
            todos: 1,
          },
        ],
      };

      expect(state.toggleStatus('12', defaultState)).toStrictEqual(
        JSON.parse(localStorage.getItem('state')),
      );
    });
  });

  describe('removeTodo(id, state)', () => {
    it('should return the state with the todo removed', () => {
      const defaultState = {
        todos: [
          {
            id: '12',
            todo: 'first',
            list: 'default',
            priority: 'normal',
          },
        ],
        lists: [
          {
            name: 'default',
            todos: 2,
          },
        ],
      };

      expect(
        state
          .removeTodo('12', defaultState)
          .todos.some((el) => el.todo === 'first'),
      ).toStrictEqual(false);
    });

    it('should return the state with the list where the todo was added having the todos decremented by one', () => {
      const defaultState = {
        todos: [
          {
            id: '12',
            todo: 'first',
            list: 'default',
            priority: 'normal',
          },
        ],
        lists: [
          {
            name: 'default',
            todos: 2,
          },
        ],
      };

      expect(
        state
          .removeTodo('12', defaultState)
          .lists.find((el) => el.name === 'default').todos,
      ).toStrictEqual(1);
    });

    it('should remove the item and update the localStorage `state` variable', () => {
      const defaultState = {
        todos: [
          {
            id: '12',
            todo: 'first',
            list: 'default',
            priority: 'normal',
          },
        ],
        lists: [
          {
            name: 'default',
            todos: 2,
          },
        ],
      };

      expect(state.removeTodo('12', defaultState)).toStrictEqual(
        JSON.parse(localStorage.getItem('state')),
      );
    });
  });

  describe('editTodoField(id, field, value, state)', () => {
    const defaultState = {
      todos: [
        {
          id: '12',
          todo: 'first',
          list: 'default',
          priority: 'normal',
        },
      ],
      lists: [
        {
          name: 'default',
          todos: 2,
        },
      ],
    };

    it('edits the `todo` property', () => {
      expect(
        state
          .editTodoField('12', 'todo', 'second', defaultState)
          .todos.find((el) => el.id === '12').todo,
      ).toStrictEqual('second');
    });

    it('edits the `priority` property', () => {
      expect(
        state
          .editTodoField('12', 'priority', 'urgent', defaultState)
          .todos.find((el) => el.id === '12').priority,
      ).toStrictEqual('urgent');
    });

    it('edits the `description` property', () => {
      expect(
        state
          .editTodoField('12', 'description', 'description', defaultState)
          .todos.find((el) => el.id === '12').description,
      ).toStrictEqual('description');
    });

    it('edits the `notes` property', () => {
      expect(
        state
          .editTodoField('12', 'notes', 'notes', defaultState)
          .todos.find((el) => el.id === '12').notes,
      ).toStrictEqual('notes');
    });

    it('edits the `date` property', () => {
      expect(
        state
          .editTodoField('12', 'date', '17/09/2020', defaultState)
          .todos.find((el) => el.id === '12').date,
      ).toStrictEqual('17/09/2020');
    });

    it('update the localStorage with the details', () => {
      expect(
        state.editTodoField('12', 'date', '17/09/2020', defaultState),
      ).toStrictEqual(JSON.parse(localStorage.getItem('state')));
    });
  });
});

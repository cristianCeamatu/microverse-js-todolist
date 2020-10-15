import moment from 'moment';

const listTodos = (todos, activeList, Node) => [...todos]
  .filter((el) => el.list === activeList)
  .reverse()
  .map((todo) => Node(todo, activeList))
  .join('');

const dueOrPassed = (todos, activeList, Node) => [...todos]
  .filter(
    (todo) => moment(todo.dueDate).format('YYYY-MM-DD')
        <= moment().format('YYYY-MM-DD'),
  )
  .reverse()
  .map((todo) => Node(todo, activeList))
  .join('');

const currentTodos = (todos, activeList, Node) => (activeList === 'due-or-passed'
  ? dueOrPassed(todos, activeList, Node)
  : listTodos(todos, activeList, Node));

const listTitle = (activeList) => {
  if (typeof activeList !== 'string') {
    return 'Please use a string as parameter';
  }
  return activeList.split('-').join(' ');
};

const addFormIf = (firstParam, secondParam, Node) => (firstParam === secondParam ? '' : Node(firstParam));

export { currentTodos, listTitle, addFormIf };

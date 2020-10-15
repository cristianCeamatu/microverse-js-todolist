import moment from 'moment';

const addedLists = (lists = []) =>
  [...lists].filter((el) => el.name !== 'default');
const itemsWithoutList = (todos = []) =>
  [...todos].filter((el) => el.list === 'default').length;
const dueOrPassed = (todos = []) =>
  [...todos].filter(
    (todo) =>
      moment(todo.dueDate).format('YYYY-MM-DD') <= moment().format('YYYY-MM-DD')
  ).length;
const addActiveClass = (activeList) =>
  activeList === 'default' ? 'active' : '';

const arrayToDom = (array, Node, extraParameter = false) =>
  [...array].map((el) => Node(el, extraParameter)).join('');

export {
  addedLists,
  itemsWithoutList,
  dueOrPassed,
  addActiveClass,
  arrayToDom,
};

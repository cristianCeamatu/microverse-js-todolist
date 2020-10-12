import moment from 'moment';

const defaultDate = (dueDate = false) => (dueDate
  ? moment(dueDate).format('YYYY-MM-DD')
  : moment().add(1, 'd').format('YYYY-MM-DD'));

const defaultValue = (description = false, text) => description || text;
const ifTrueAdd = (condition = false, text) => (condition ? text : '');

const isSelected = (priority, element) => (priority === element ? 'selected' : '');

const hasActiveClass = (firstParam, secondParam) => (firstParam === secondParam ? 'active' : '');

export {
  defaultDate, defaultValue, isSelected, hasActiveClass, ifTrueAdd,
};

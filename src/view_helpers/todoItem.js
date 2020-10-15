import moment from 'moment';

const todoDueDate = (dueDate) => (dueDate ? `<span>due ${moment(dueDate).startOf('hour').fromNow()}<span>` : '');

const addPriorityClass = (priority, element) => {
  if (priority === 'urgent') {
    element.classList.add('bg-warning', 'text-white');
  } else if (priority === 'later') {
    element.classList.add('bg-info', 'text-white');
  }
};

export { todoDueDate, addPriorityClass };

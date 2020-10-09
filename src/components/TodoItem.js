import moment from 'moment';

export default function component({ todo, id, priority, dueDate, status = false }, activeList) {
  const element = document.createElement('li');
  element.className =
    'd-flex align-items-center justify-content-between rounded';

  if (priority === 'urgent') {
    element.classList.add('bg-warning', 'text-white');
  }

  element.innerHTML = `
    <input type="checkbox" name="todo_toggle_status"
    data-id="${id}" class="todo_toggle_status" ${status ? 'checked' : ''}>
    <p class="mb-0 flex-fill ${status && 'todo-done'}">
      <a href="#" class="show-todo-toggler" data-id="${id}">${todo}</a></p>
    <p class="text-danger remove-todo mb-0" data-id="${id}"  data-list="${activeList}">
      ${dueDate ? `<span>due ${moment(dueDate).startOf('hour').fromNow()}<span>` : ''}
      <i class="fas fa-trash"></i>
    </p>
  `;

  return element.outerHTML;
}

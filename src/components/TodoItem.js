import { todoDueDate, addPriorityClass } from '../view_helpers/todoItem';
import { ifTrueAdd } from '../view_helpers/utils';

const TodoItem = (
  {
    todo, id, priority, dueDate, status = false,
  },
  activeList,
) => {
  const element = document.createElement('li');
  element.className = 'd-flex align-items-center justify-content-between rounded';

  addPriorityClass(priority, element);

  element.innerHTML = `
    <input type="checkbox" name="todo_toggle_status"
    data-id="${id}" class="todo_toggle_status" ${ifTrueAdd(status, 'checked')}>
    <p class="mb-0 flex-fill ${ifTrueAdd(status, 'todo-done')}">
      <a href="#" class="show-todo-toggler" data-id="${id}">${todo}</a></p>
    <p class="remove-todo mb-0" data-id="${id}" data-list="${activeList}">
      ${todoDueDate(dueDate)}
      <i class="fas fa-trash text-danger"></i>
    </p>
  `;

  return element.outerHTML;
};

export default TodoItem;

export default function component({ todo, id, priority, status = false }) {
  const element = document.createElement('li');
  element.className =
    'd-flex align-items-center justify-content-between rounded';

  if (priority === 'urgent') {
    element.classList.add('bg-warning text-white');
  }

  element.innerHTML = `
    <input type="checkbox" name="todo_toggle_status"
    data-id="${id}" class="todo_toggle_status" ${status ? 'checked' : ''}>
    <p class="main-item-text mb-0 flex-fill">
      <a href="#" class="show-todo-toggler" data-id="${id}">${todo}</a></p>
    <p class="text-danger remove-todo mb-0" data-id="${id}"><i class="fas fa-trash"></i></p>
  `;

  return element.outerHTML;
}

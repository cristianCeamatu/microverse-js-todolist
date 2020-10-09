export default function component({ todo, id, status = false }) {
  const element = document.createElement('li');
  element.className = 'd-flex align-items-center justify-content-between';

  element.innerHTML = `
    <input type="checkbox" name="todo_toggle_status"
    data-id="${id}" class="todo_toggle_status" ${status ? 'checked' : ''}>
    <p class="main-item-text mb-0 flex-fill">
      <a href="javascript:;">${todo}</a></p>
    <a href="javascript:;" class="text-danger"><i class="fas fa-trash"></a></i>
  `;

  return element.outerHTML;
}

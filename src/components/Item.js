export default function component() {
  const element = document.createElement('article');
  element.className = 'item-show py-3 px-2';

  element.innerHTML = `
    <div class="item-show-header d-flex align-items-center justify-content-between mx-3 p-2 my-2 shadow-sm">
      <input type="checkbox" name="todo_toggle_status" id="todo_toggle_status" class="ml-2">
      <div class="main-item-text mb-2 ml-2 flex-fill px-2 editable form-control" contentEditable>Plicuri
        centrala, pungi
        cox,
        domestos, cartofi, apa, hartie</div>
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      <p>Description:</p>
      <p class="flex-fill form-control ml-2 editable main-item-text" contenteditable>No notes</p>
    </div>
    <div class="mx-3 p-3 my-2 shadow-sm">Due date: <input type="date" id="due-date" class="form-control"></div>
    <div class="mx-3 p-3 my-2 shadow-sm">
      Priority:
      <select name="priority" id="priority" class="ml-2 form-control">
        <option value="urgent">Urgent</option>
        <option value="late">Late</option>
        <option value="anytime">Anytime</option>
      </select>
    </div>
    <div class="mx-3 p-3 my-2 shadow-sm">
      <p>Notes:</p>
      <p class="flex-fill form-control ml-2 editable main-item-text" contenteditable>No notes</p>
    </div>
  `;

  return element;
}
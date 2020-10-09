import moment from 'moment';

export default function component({
  todo,
  description,
  notes,
  priority,
  id,
  status,
  dueDate,
}) {
  const tommorow = moment().add(1, 'd').format('YYYY-DD-MM');

  const element = document.createElement('article');
  element.className = 'item-show py-3 px-2';

  element.innerHTML = `
    <div class="item-show-header mx-3 p-3 my-2 shadow-sm">
      <p>Todo:</p>
      <div class="d-flex align-items-center justify-content-between">
      <input type="checkbox" name="todo_toggle_status" data-id="${id}" class="todo_toggle_status" ${
    status ? 'checked' : ''
  } class="ml-2">
      <input type="text" class="mb-2 ml-2 flex-fill px-2 form-control edit-todo" data-field="todo" value="${todo}" rows="2" data-id="${id}">
      </div>
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      <p>Description:</p>
      <textarea class="flex-fill form-control ml-2 main-item-text edit-todo" data-field="description" data-id="${id}">${
    description || 'Add a description'
  }</textarea>
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">Due date (${
      !dueDate ? 'not set' : ''
    }): <input type="date" id="due-date" class="form-control edit-todo" data-field="dueDate" value="${
    dueDate ? moment(dueDate).format('YYYY-DD-MM') : tommorow
  }" data-id="${id}"></div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      Priority:
      <select name="priority" id="priority" class="ml-2 form-control edit-todo" data-field="priority" data-id="${id}">
        <option value="urgent" ${
          priority === 'urgent' && 'selected'
        }>Urgent</option>
        <option value="later" ${
          priority === 'later' && 'selected'
        }>Later</option>
        <option value="normal" ${priority && 'selected'}>Normal</option>
      </select>
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      <p>Notes:</p>
      <textarea class="flex-fill form-control ml-2 main-item-text edit-todo" data-field="notes" data-id="${id}">${
    notes || 'Add notes'
  }</textarea>
    </div>
  `;

  return element.outerHTML;
}

import { defaultDate, defaultValue, isSelected } from '../view_helpers/utils';

const Item = ({
  todo, description, notes, priority, id, dueDate,
}) => {
  const element = document.createElement('article');
  element.className = 'item-show py-3 px-2';

  element.innerHTML = `
    <div class="item-show-header mx-3 p-3 my-2 shadow-sm">
      <p>Todo:</p>
      <input type="text" class="mb-2 ml-2 flex-fill px-2 form-control edit-todo" data-field="todo" value="${todo}" rows="2" data-id="${id}">
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      <p>Description:</p>
      <textarea class="flex-fill form-control ml-2 main-item-text edit-todo" data-field="description" data-id="${id}">${defaultValue(
  description,
  'No description',
)}</textarea>
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">Due date: 
    <input type="date" id="due-date" class="form-control edit-todo" data-field="dueDate" value="${defaultDate(
    dueDate,
  )}" data-id="${id}"></div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      Priority:
      <select name="priority" id="priority" class="ml-2 form-control edit-todo" data-field="priority" data-id="${id}">
        <option value="urgent" ${isSelected(priority, 'urgent')}>Urgent</option>
        <option value="later" ${isSelected(priority, 'later')}>Later</option>
        <option value="normal" ${isSelected(priority, 'normal')}>Normal</option>
      </select>
    </div>

    <div class="mx-3 p-3 my-2 shadow-sm">
      <p>Notes:</p>
      <textarea class="flex-fill form-control ml-2 main-item-text edit-todo" data-field="notes" data-id="${id}">${defaultValue(
  notes,
  'No notes',
)}</textarea>
    </div>
  `;

  return element.outerHTML;
};

export default Item;

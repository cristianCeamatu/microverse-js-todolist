export default function component(list) {
  const element = document.createElement('ul');
  element.className = 'main-items list-unstyled mb-0';

  element.innerHTML = `
    <li class="main-items-form">
      <form action="" id="add-todo-form" data-list="${list}">
        <button type="submit" id="add-todo-button" class="text-color-primary h4 mb-0"><i
            class="fas fa-plus"></i></button>
        <input type="text" name="todo" id="todo" class="border-0 text-color-primary" pattern=".{3,80}" required title="Between 3-80 characters accepted"
          placeholder="Add a new activity">
      </form>
    </li>
  `;

  return element.outerHTML;
}
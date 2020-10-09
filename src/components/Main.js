import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

export default function component(todos, list = 'default') {
  const element = document.createElement('main');
  const listTodos = [...todos].filter(el => el.list === list);
  element.innerHTML = `
    <div class="container-fluid py-4">
      <div class="main-header d-flex align-items-center justify-content-between text-color-primary">
        <h1 class="main-header-title mb-0 h5">My day</h1>

      <ul class="main-header-links list-unstyled mb-0 d-flex align-items-center">
          <li class="mr-2"><a href="javascript:;"><i class="far fa-lightbulb"></i> Suggestions</a></li>
          <li><a href="javascript:;"><i class="fas fa-sort"></i> Sort</a></li>
        </ul>
      </div>

      <section class="main">
        ${list === 'due-or-passed' ? '' : AddTodoForm(list)}

        <ul class="main-items list-unstyled mb-0">
          ${[...listTodos].reverse().map((todo) => TodoItem(todo)).join('')}
        </ul>
      </section>
    </div>
  `;

  return element.outerHTML;
}
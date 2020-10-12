import { currentTodos, listTitle, addFormIf } from '../view_helpers/main';

import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const Main = (todos, activeList = 'default') => {
  const element = document.createElement('main');

  element.innerHTML = `
    <div class="container-fluid py-4">
      <div class="main-header d-flex align-items-center justify-content-between text-color-primary">
        <h1 class="main-header-title h5 text-capitalize">${listTitle(
    activeList,
  )}</h1>

      <ul class="main-header-links list-unstyled mb-0 d-flex align-items-center">
          <li class="mr-2"><a href="javascript:;"><i class="far fa-lightbulb"></i> Suggestions</a></li>
          <li><a href="javascript:;"><i class="fas fa-sort"></i> Sort</a></li>
        </ul>
      </div>

      <section class="main">
        ${addFormIf(activeList, 'due-or-passed', AddTodoForm)}

        <ul class="main-items list-unstyled mb-0">
          ${currentTodos(todos, activeList, TodoItem)}
        </ul>
      </section>
    </div>
  `;

  return element.outerHTML;
};

export default Main;

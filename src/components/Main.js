import moment from 'moment';

import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

export default function component(todos, activeList = 'default') {
  const listTodos = [...todos].filter(el => el.list === activeList);
  const dueOrPassed = [...todos].filter(todo => moment(todo.dueDate).format('YYYY-MM-DD') <= moment().format('YYYY-MM-DD'));

  const element = document.createElement('main');
  element.innerHTML = `
    <div class="container-fluid py-4">
      <div class="main-header d-flex align-items-center justify-content-between text-color-primary">
        <h1 class="main-header-title h5 text-capitalize">${activeList.split('-').join(" ")}</h1>

      <ul class="main-header-links list-unstyled mb-0 d-flex align-items-center">
          <li class="mr-2"><a href="javascript:;"><i class="far fa-lightbulb"></i> Suggestions</a></li>
          <li><a href="javascript:;"><i class="fas fa-sort"></i> Sort</a></li>
        </ul>
      </div>

      <section class="main">
        ${activeList === 'due-or-passed' ? '' : AddTodoForm(activeList)}

        <ul class="main-items list-unstyled mb-0">
          ${activeList === 'due-or-passed' ?
          [...dueOrPassed].reverse().map((todo) => TodoItem(todo, activeList)).join('')
            :  
          [...listTodos].reverse().map((todo) => TodoItem(todo, activeList)).join('')}
        </ul>
      </section>
    </div>
  `;

  return element.outerHTML;
}
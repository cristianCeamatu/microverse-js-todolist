import ListItem from './ListItem';

export default function component({
  lists,
  todos,
}) {
  const addedLists = lists.filter((el) => el.name !== 'default');
  const itemsWithoutList = todos.filter((el) => el.list === 'default');
  const dueOrPassed = todos.filter(todo => new Date(todo.dueDate) <= new Date());

  const element = document.createElement('aside');
  element.classList.add('bg-light');

  element.innerHTML = `
    <div class="container-fluid">
      <button class="my-4" id="side-nav-toggler"><i class="fas fa-bars"></i></button>

      <ul class="list-unstyled side-nav-header-links pb-1 border-bottom mb-0" id="side-nav-header">
        <li>
          <span><i class="fas fa-home"></i> <a href="#" class="list-navigation active" data-list="default">Without a list</a></span>
          <span class="count ml-3 hide-on-toggle">${itemsWithoutList.length}</span>
        </li>
        <li class="pb-0">
            <span><i class="fas fa-sun"></i> <a href="#" class="list-navigation" data-list="due-or-passed">Due today or passed</a></span>
            <span class="count ml-3 hide-on-toggle">${dueOrPassed.length}</span>
        </li>
      </ul>

      <ul class="list-unstyled side-nav-main-links" id="side-nav-main">
        <li>${[...addedLists].map((list) => ListItem(list)).join('')}</li>
      </ul>

      <div class="side-nav-actions text-center">
        <a href="#" id="add-list-toggler" class="mx-1 btn btn-info btn-sm d-block w-50 mx-auto"><i class="fas fa-list-ul text-white"></i> Add list</a>
        <form id="add-list-form" class="text-left p-3 shadow-sm hide">
          <div class="form-group">
            <input type="text" class="form-control" name="name" id="name" pattern=".{3,20}" required title="Between 3-20 characters accepted" placeholder="Enter name">
          </div>
          <button type="submit" class="btn btn-info btn-sm d-block w-50 my-3 mx-auto">Submit</button>
        </form>
      </div>

      <ul
        class="list-unstyled mb-0 side-nav-footer d-flex align-items-center justify-content-around text-center w-100">
        <li><a href="javascript:;"><i class="fas fa-envelope"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-calendar-alt"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-users"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-paperclip"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-check"></i></a></li>
      </ul>
    </div>
  `;

  return element;
}
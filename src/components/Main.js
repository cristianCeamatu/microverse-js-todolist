export default function component() {
  const element = document.createElement('main');
  element.className = 'border w-100';

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
        <ul class="main-items list-unstyled mb-0">
          <li class="main-items-form">
            <form action="" onsubmit="preventDefault()" class="add-todo-form">
              <button type="submit" id="add-todo-button" class="text-color-primary h4 mb-0"><i
                  class="fas fa-plus"></i></button>
              <input type="text" name="todo" id="todo" class="border-0 text-color-primary"
                placeholder="Add a new activity">
            </form>
          </li>
        </ul>

        <ul class="main-items list-unstyled mb-0">
          <li class="d-flex align-items-center justify-content-between">
            <input type="checkbox" name="todo_toggle_status" id="todo_toggle_status">
            <p class="main-item-text mb-0 flex-fill">
              <a href="javascript:;">Plicuri centrala, pungi cox, domestos, cartofi, apa, hartie</a></p>
            <a href="javascript:;" class="text-danger"><i class="fas fa-trash"></a></i>
          </li>
          <li class="d-flex align-items-center justify-content-between">
            <input type="checkbox" name="todo_toggle_status" id="todo_toggle_status" checked>
            <p class="main-item-text mb-0 flex-fill">
              <a href="javascript:;">Plicuri centrala, pungi cox, domestos, cartofi, apa, hartie</a></p>
            <a href="javascript:;" class="text-danger"><i class="fas fa-trash"></a></i>
          </li>
          <li class="d-flex align-items-center justify-content-between">
            <input type="checkbox" name="todo_toggle_status" id="todo_toggle_status">
            <p class="main-item-text mb-0 flex-fill">
              <a href="javascript:;">Plicuri centrala, pungi cox, domestos, cartofi, apa, hartie</a></p>
            <a href="javascript:;" class="text-danger"><i class="fas fa-trash"></a></i>
          </li>
        </ul>
      </section>
    </div>
  `;

  return element;
}
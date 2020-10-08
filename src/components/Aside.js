export default function component() {
  const element = document.createElement('aside');
  element.classList.add('bg-light');

  element.innerHTML = `
    <div class="container-fluid">
      <button class="my-4" id="side-nav-toggler"><i class="fas fa-bars"></i></button>

      <ul class="list-unstyled side-nav-header-links" id="side-nav-header">
        <li><a href="javascript:;"><span><i class="fas fa-sun"></i> My day</span> <span
              class="count ml-3">1</span></a>
        </li>
        <li><a href="javascript:;"><span><i class="fas fa-home"></i> Activities</span> <span
              class="count ml-3">1</span></a>
        </li>
      </ul>

      <ul class="list-unstyled side-nav-main-links" id="side-nav-main">
        <li><a href="javascript:;"><span><i class="fas fa-list-ul"></i> Microverse</span>
            <span class="count ml-3">10</span></a></li>
        <li><a href="javascript:;"><span><i class="fas fa-layer-group"></i> House</span><span class="state ml-3"><i
                class="fas fa-angle-left"></i></span></a> </li>
        <li><a href="javascript:;"><span><i class="fas fa-layer-group"></i> Work</span> <span class="state ml-3"><i
                class="fas fa-angle-down"></i></span></a></li>
        <ul class="group-links pl-2 border-left mb-0">
          <li class="d-flex align-items-center justify-content-between"><a href="javascript:;"><span><i
                  class="fas fa-list-ul"></i> Microverse</span>
              <span class="count ml-3"> 10</span></a>
          </li>
        </ul>
      </ul>

      <div class="side-nav-actions d-flex align-items-center justify-content-between">
        <i class="fas fa-list-ul"></i><a href="javascript:;" contenteditable class="editable form-control mx-1"> Add
        </a>
        <i class="fas fa-layer-group"></i><a href="javascript:;" contenteditable class="editable form-control ml-1">
          Add</a>
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
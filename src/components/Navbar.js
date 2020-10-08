import avatar from '../assets/images/avatar.jpg';

export default function component() {
  const element = document.createElement('header');

  element.innerHTML = `
    <nav class="d-flex justify-content-between align-items-center">
      <ul class="list-unstyled mb-0 d-flex align-items-center nav-left">
        <li class="nav-item"><a href="javascript:;" class="nav-link"><i class="fas fa-home"></i></a></li>
        <li class="nav-item"><a href="javascript:;" class="nav-link">To Do</a></li>
      </ul>

      <form action="javascript:;" onsubmit="e.preventDefault()" class="nav-search">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
          </div>
          <input type="search" class="form-control" aria-label="Search" aria-describedby="basic-addon1">
        </div>
      </form>

      <ul class="list-unstyled mb-0 d-flex align-items-center nav-right">
        <li class="nav-item"><a href="javascript:;" class="nav-link"><i class="fas fa-cog"></i></a></li>
        <li class="nav-item"><a href="javascript:;" class="nav-link"><i class="fas fa-settings"></i></a></li>
        <li class="nav-item"><a href="javascript:;" class="nav-link"><i class="fas fa-bell"></i></a></li>
        <li class="nav-item"><a href="javascript:;" class="nav-link"><img src="${avatar}"
              alt="Avataa" width="35" class="rounded-circle"></a></li>
      </ul>
    </nav>
  `;

  return element;
}
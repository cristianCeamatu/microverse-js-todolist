import {
  addList,
} from '../state';

function formToggler(clicker, element) {
  document.querySelector(clicker).addEventListener('click', e => {
    e.preventDefault();
    e.target.classList.toggle('btn-info');
    document.querySelector(element).classList.toggle('hide');
  });

  return this;
}

function listNavigation(clicker) {
  document.querySelectorAll(clicker).forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('aside a.active')[0].classList.remove('active');
      e.target.classList.add('active');
    });
  });

  return this;
}

function listFormSubmit(form, state) {
  document.querySelector(form).addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    addList(name, state);
  });

  return this;
}

export {
  formToggler,
  listNavigation,
  listFormSubmit,
};
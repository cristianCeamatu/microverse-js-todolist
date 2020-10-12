import { hasActiveClass } from '../view_helpers/utils';

const ListItem = ({ name, todos }, activeList) => {
  const element = document.createElement('li');

  element.innerHTML = `
    <span class="text-capitalize"><i class="fas fa-layer-group"></i> <a href="#" class="list-navigation ${hasActiveClass(
    activeList,
    name,
  )}" data-list="${name}">${name}</a></span>
    <span class="count ml-3 hide-on-toggle">${todos}</span></span>
  `;

  return element.outerHTML;
};

export default ListItem;

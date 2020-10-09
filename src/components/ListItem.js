export default function component({
  name,
  todos,
}) {
  const element = document.createElement('li');

  element.innerHTML = `
    <span class="text-capitalize"><i class="fas fa-layer-group"></i> <a href="#" class="list-navigation" data-list="${name}">${name}</a></span>
    <span class="count ml-3 hide-on-toggle">${todos}</span></span>
  `;

  return element.outerHTML;
}
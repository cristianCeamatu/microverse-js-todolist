import Navbar from './Navbar';
import Aside from './Aside';
import Main from './Main';

const App = (state) => {
  const element = document.createElement('div');

  element.innerHTML = `
    ${Navbar()}
    <div class="d-flex">
      <div id="aside-nav" class="bg-light">
      ${Aside(state)}
      </div>
      <div id="main-todos" class="border w-100">
        ${Main(state.todos)}
      </div>
      <div id="show-todo" class="hide"
      </div>
    </div>
  `;
  return element;
};

export default App;

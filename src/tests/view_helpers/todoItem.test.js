import '@testing-library/jest-dom';

import { addPriorityClass } from '../../view_helpers/todoItem';

describe('todoItem view helpers has the methods', () => {
  let element;
  beforeAll(() => {
    element = document.createElement('div');
  });

  it('addPriorityClass(priority, element) add the  "text-white" class to the element', () => {
    addPriorityClass('urgent', element);
    expect(element).toHaveClass('text-white');
  });

  it('addPriorityClass(priority, element) add the "bg-warning" class to the element if the priority is urgent', () => {
    addPriorityClass('urgent', element);
    expect(element).toHaveClass('bg-warning');
  });

  it('addPriorityClass(priority, element) add the "bg-info" class to the element if the priority is later', () => {
    addPriorityClass('later', element);
    expect(element).toHaveClass('bg-info');
  });
});

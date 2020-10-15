import { listTitle } from '../../view_helpers/main';

describe('main view helpers has the methods', () => {
  it('listTitle() takes a string joined by dashes and replaces the dashed with spaces', () =>
    expect(listTitle('xx-aa')).toStrictEqual('xx aa'));
  it('listTitle() throws an error when the parameter is not a string', () =>
    expect(listTitle(3455)).toStrictEqual('Please use a string as parameter'));
});

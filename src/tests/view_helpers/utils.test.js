import moment from 'moment';

import {
  defaultDate,
  defaultValue,
  isSelected,
  hasActiveClass,
  ifTrueAdd,
} from '../../view_helpers/utils';

describe('util view helpers methods', () => {
  let tommorow;
  let formatedDueDate;
  beforeAll(() => {
    tommorow = moment().add(1, 'd').format('YYYY-MM-DD');
    formatedDueDate = moment(new Date()).format('YYYY-MM-DD');
  });

  it('defaultDate(dueDate) returns the formated dueDate from new Date() form to `YYYY-MM-DD`', () =>
    expect(defaultDate(new Date())).toStrictEqual(formatedDueDate));

  it('defaultDate(dueDate) returns the tommorow date if no date is provided', () =>
    expect(defaultDate()).toStrictEqual(tommorow));

  it('defaultValue(description, text) returns the text if the description is `false`', () =>
    expect(defaultValue(false, 'Text')).toStrictEqual('Text'));

  it('defaultValue(description, text) returns the description if the description is not `false`', () =>
    expect(defaultValue('Description')).toStrictEqual('Description'));

  it('ifTrueAdd(condition, text) returns the text if the condition is `true`', () =>
    expect(ifTrueAdd(true, 'Text')).toStrictEqual('Text'));

  it('ifTrueAdd(condition, text) returns an empty string if the condition is `false`', () =>
    expect(ifTrueAdd(false, 'Description')).toStrictEqual(''));

  it('isSelected(priority, element) returns `selected` if the parameters are strictly equal', () =>
    expect(isSelected('text', 'text')).toStrictEqual('selected'));

  it('isSelected(priority, element) returns an empty string if the parameters are not strictly equal', () =>
    expect(isSelected('text', 'Text')).toStrictEqual(''));

  it('hasActiveClass(firstParam, secondParam) returns `active` if the parameters are strictly equal', () =>
    expect(hasActiveClass('text', 'text')).toStrictEqual('active'));

  it('hasActiveClass(firstParam, secondParam) returns an empty string if the parameters are not strictly equal', () =>
    expect(hasActiveClass('text', 'Text')).toStrictEqual(''));
});

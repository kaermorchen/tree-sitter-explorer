import InputCheckbox from './input-checkbox';
import { expect, jest, test } from '@jest/globals';
import { cleanup, fireEvent, screen, render } from '@testing-library/react';

afterEach(cleanup);

test('renders without crashing', () => {
  render(
    <InputCheckbox
      label="hello"
      checked={false}
      onChange={() => console.log('onChange')}
    />
  );

  expect(screen.getByRole('checkbox')).toHaveTextContent('hello');
});

test('onChange event', () => {
  const onChange = jest.fn();

  render(<InputCheckbox label="hello" checked={false} onChange={onChange} />);

  fireEvent.click(screen.getByRole('checkbox'));

  expect(onChange).toBeCalled();
});

test('checked changed', () => {
  let checked = false;
  const onChange = (val) => {
    checked = val;
  };

  render(<InputCheckbox label="hello" checked={checked} onChange={onChange} />);

  fireEvent.click(screen.getByRole('checkbox'));

  expect(checked).toBeTruthy();
});

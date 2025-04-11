import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TodoContainer } from './TodoContainer';
import { TestWrapper } from '../wrappers/TestWrapper';

describe(TodoContainer.name, () => {
  it('renders a list of todo items', () => {
    render(
      <TestWrapper>
        <TodoContainer />
      </TestWrapper>
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(within(listItems[0]).getByText(/Setup development environment/i));
    expect(within(listItems[0]).getByRole('checkbox'));
    expect(within(listItems[0]).getByRole('button', { name: /delete/i }));
    expect(within(listItems[0]).getByRole('button', { name: /add comment/i }));
  });
  it('deletes a todo item', async () => {
    render(
      <TestWrapper>
        <TodoContainer />
      </TestWrapper>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(within(listItems[0]).getByText(/Setup development environment/i));
    await userEvent.click(
      within(listItems[0]).getByRole('button', { name: /delete/i })
    );
    const updatedListItems = screen.getAllByRole('listitem');
    expect(updatedListItems).toHaveLength(2);
    expect(
      within(updatedListItems[0]).getByText(/Develop website and add content/i)
    );
  });
  it('adds a comment on a todo item', async () => {
    render(
      <TestWrapper>
        <TodoContainer />
      </TestWrapper>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(within(listItems[0]).getByText(/Setup development environment/i));
    await userEvent.click(
      within(listItems[0]).getByRole('button', { name: /add comment/i })
    );
    expect(screen.getByLabelText('Type your comment'));
    expect(within(listItems[0]).queryByRole('button', { name: /add comment/i }))
      .not.toBeInTheDocument;
    await userEvent.type(
      screen.getByLabelText('Type your comment'),
      'Hello world'
    );
    await userEvent.click(
      within(listItems[0]).getByRole('button', { name: /submit comment/i })
    );
    expect(within(listItems[0]).getByText('Hello world')).toBeInTheDocument();
  });
});

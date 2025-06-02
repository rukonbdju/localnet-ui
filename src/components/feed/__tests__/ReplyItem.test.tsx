import React from 'react';
import { render, screen } from '@testing-library/react';
import ReplyItem from '../ReplyItem';
import { Reply } from '../../../types/feed';

describe('ReplyItem', () => {
  const mockReply: Reply = {
    id: 'reply1',
    userId: 'user3',
    commentId: 'comment1',
    content: 'This is a test reply.',
    timestamp: new Date(),
  };

  it('renders without crashing', () => {
    render(<ReplyItem reply={mockReply} />);
  });

  it('displays the reply content', () => {
    render(<ReplyItem reply={mockReply} />);
    expect(screen.getByText(/This is a test reply./i)).toBeInTheDocument();
  });

  it('displays the user ID', () => {
    render(<ReplyItem reply={mockReply} />);
    expect(screen.getByText(/- User: user3/i)).toBeInTheDocument();
  });
});

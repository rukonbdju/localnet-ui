import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentItem from '../CommentItem';
import { Comment } from '../../../types/feed';

// Mock ReplyItem
jest.mock('../ReplyItem', () => () => <div data-testid="reply-item">Mocked ReplyItem</div>);

describe('CommentItem', () => {
  const mockComment: Comment = {
    id: 'comment1',
    userId: 'user2',
    postId: 'post1',
    content: 'This is a test comment.',
    timestamp: new Date(),
    replies: [
      {
        id: 'reply1',
        userId: 'user3',
        commentId: 'comment1',
        content: 'A reply',
        timestamp: new Date()
      }
    ],
  };

  it('renders without crashing', () => {
    render(<CommentItem comment={mockComment} />);
  });

  it('displays the comment content', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getByText(/This is a test comment./i)).toBeInTheDocument();
  });

  it('displays the user ID', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getByText(/- User: user2/i)).toBeInTheDocument();
  });

  it('renders ReplyItem for each reply', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getAllByTestId('reply-item')).toHaveLength(mockComment.replies.length);
  });

  it('does not render replies section if there are no replies', () => {
    const commentWithoutReplies: Comment = { ...mockComment, replies: [] };
    render(<CommentItem comment={commentWithoutReplies} />);
    expect(screen.queryByText('Replies:')).not.toBeInTheDocument();
    expect(screen.queryByTestId('reply-item')).toBeNull();
  });
});

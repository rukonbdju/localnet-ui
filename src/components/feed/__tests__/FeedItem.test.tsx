import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedItem from '../FeedItem';
import { Post } from '../../../types/feed';

// Mock CommentItem to avoid rendering its full tree
jest.mock('../CommentItem', () => () => <div data-testid="comment-item">Mocked CommentItem</div>);

describe('FeedItem', () => {
  const mockPost: Post = {
    id: 'post1',
    userId: 'user1',
    content: 'This is a test post content.',
    timestamp: new Date(),
    reactions: [{ userId: 'user2', type: 'like' }],
    comments: [
      {
        id: 'comment1',
        userId: 'user3',
        postId: 'post1',
        content: 'A comment',
        timestamp: new Date(),
        replies: []
      }
    ],
  };

  it('renders without crashing', () => {
    render(<FeedItem post={mockPost} />);
  });

  it('displays the post content', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getByText('This is a test post content.')).toBeInTheDocument();
  });

  it('displays reactions', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getByText(/Reactions: like/i)).toBeInTheDocument();
  });

  it('renders CommentItem for each comment', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getAllByTestId('comment-item')).toHaveLength(mockPost.comments.length);
  });
});

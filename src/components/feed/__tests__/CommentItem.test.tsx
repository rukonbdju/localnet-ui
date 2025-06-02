import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentItem from '../CommentItem';
import { Comment } from '../../../types/feed';

// Mock ReplyItem
jest.mock('../ReplyItem', () => ({ reply }: { reply: any }) => (
  <div data-testid="reply-item">Mocked ReplyItem: {reply.content}</div>
));

describe('CommentItem', () => {
  const mockComment: Comment = {
    id: 'commentTest1',
    userId: 'userTest2',
    postId: 'postTest1',
    content: 'This is a test comment for CommentItem.',
    timestamp: new Date(), // Will be formatted by mocked date-fns
    replies: [
      {
        id: 'reply1',
        userId: 'userTest3',
        commentId: 'commentTest1',
        content: 'A test reply',
        timestamp: new Date()
      }
    ],
  };

  const commentWithoutReplies: Comment = { ...mockComment, replies: [] };

  it('renders without crashing', () => {
    render(<CommentItem comment={mockComment} />);
  });

  it('displays the user ID', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getByText(mockComment.userId)).toBeInTheDocument();
  });

  it('displays the comment content', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getByText(mockComment.content)).toBeInTheDocument();
  });

  it('displays the mocked timestamp', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getByText('mocked time ago')).toBeInTheDocument();
  });

  it('renders ReplyItem for each reply if replies exist', () => {
    render(<CommentItem comment={mockComment} />);
    expect(screen.getAllByTestId('reply-item')).toHaveLength(mockComment.replies.length);
    expect(screen.getByText('Mocked ReplyItem: A test reply')).toBeInTheDocument();
  });

  it('does not render replies section if there are no replies', () => {
    render(<CommentItem comment={commentWithoutReplies} />);
    expect(screen.queryByTestId('reply-item')).toBeNull();
  });

  it('renders user avatar icon', () => {
    render(<CommentItem comment={mockComment} />);
    // Similar to FeedItem, check for an SVG in the comment item's header part
    const commentBubble = screen.getByText(mockComment.content).closest('div'); // Find the content bubble
    const header = commentBubble?.parentElement; // Parent of the bubble is where avatar is a sibling
    expect(header?.querySelector('svg')).toBeInTheDocument();
  });

  it('comment content is within a styled bubble', () => {
    render(<CommentItem comment={mockComment} />);
    const contentElement = screen.getByText(mockComment.content);
    // Check if the parent of content has the bubble style (e.g. background color, border-radius)
    // This is a bit implementation-specific. A data-testid on the bubble div would be more robust.
    // For now, let's assume the structure: div (item) -> div (header) -> svg, div (userInfoStyle/bubble) -> span (userName), p (content)
    expect(contentElement.parentElement?.style.backgroundColor).toBe('rgb(228, 230, 235)'); // #e4e6eb
    expect(contentElement.parentElement?.style.borderRadius).toBe('18px');
  });
});

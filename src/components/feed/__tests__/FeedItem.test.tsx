import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedItem from '../FeedItem';
import { Post, Reaction } from '../../../types/feed';
import { FaThumbsUp, FaCommentAlt } from 'react-icons/fa'; // For checking specific icons

// Mock CommentItem to avoid rendering its full tree
jest.mock('../CommentItem', () => ({ comment }: { comment: any }) => (
  <div data-testid="comment-item">Mocked CommentItem: {comment.content}</div>
));

// Mock ReactionButton for focused testing of FeedItem
// We can check if it's called with the right props
jest.mock('../ReactionButton', () => ({ postId, reactionType, icon }: { postId: string, reactionType: string, icon: any }) => (
  <button data-testid={`reaction-button-${reactionType}`}>
    {icon && <svg data-testid={`reaction-icon-${reactionType}`} />} {/** Simplified icon mock */}
    {reactionType}
  </button>
));


describe('FeedItem', () => {
  const mockPost: Post = {
    id: 'post1',
    userId: 'userTest1',
    content: 'This is a test post content for FeedItem.',
    timestamp: new Date(), // Timestamp will be formatted by mocked date-fns
    reactions: [{ userId: 'user2', type: 'like' }, { userId: 'user3', type: 'love' }],
    comments: [
      {
        id: 'comment1',
        userId: 'user3',
        postId: 'post1',
        content: 'A test comment',
        timestamp: new Date(),
        replies: []
      }
    ],
  };

  const mockPostWithoutReactions: Post = { ...mockPost, reactions: [] };
  const mockPostWithoutComments: Post = { ...mockPost, comments: [] };


  it('renders without crashing', () => {
    render(<FeedItem post={mockPost} />);
  });

  it('displays the user ID in the header', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getByText(mockPost.userId)).toBeInTheDocument();
  });

  it('displays the mocked timestamp', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getByText('mocked time ago')).toBeInTheDocument(); // From jest.setup.js mock
  });

  it('displays the post content', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getByText('This is a test post content for FeedItem.')).toBeInTheDocument();
  });

  it('displays reaction icons and count for existing reactions', () => {
    render(<FeedItem post={mockPost} />);
    // Check for presence of reaction icons (simplified check, actual icons are more complex)
    // This depends on how reaction icons are rendered (e.g., specific class or structure)
    // Based on the implementation, it groups reactions by type.
    expect(screen.getByTitle('like').closest('svg')).toBeInTheDocument();
    expect(screen.getByTitle('love').closest('svg')).toBeInTheDocument();
    expect(screen.getByText(String(mockPost.reactions.length))).toBeInTheDocument();
  });

  it('displays "Be the first to react!" if no reactions', () => {
    render(<FeedItem post={mockPostWithoutReactions} />);
    expect(screen.getByText('Be the first to react!')).toBeInTheDocument();
  });

  it('renders ReactionButtons for available reaction types', () => {
    render(<FeedItem post={mockPost} />);
    const reactionTypes: Reaction['type'][] = ['like', 'love', 'haha', 'wow', 'sad', 'angry'];
    reactionTypes.forEach(type => {
      expect(screen.getByTestId(`reaction-button-${type}`)).toBeInTheDocument();
      // Check if icon is passed (simplified)
      expect(screen.getByTestId(`reaction-icon-${type}`)).toBeInTheDocument();
    });
  });

  it('renders the "Comment" button', () => {
    render(<FeedItem post={mockPost} />);
    const commentButton = screen.getByRole('button', { name: /Comment/i });
    expect(commentButton).toBeInTheDocument();
    expect(commentButton.querySelector('svg')).toBeInTheDocument(); // Check for FaCommentAlt icon
  });

  it('renders CommentItem for each comment if comments exist', () => {
    render(<FeedItem post={mockPost} />);
    expect(screen.getAllByTestId('comment-item')).toHaveLength(mockPost.comments.length);
    expect(screen.getByText('Comments (1)')).toBeInTheDocument(); // Assuming 1 comment in mockPost
  });

  it('does not render comments section if no comments', () => {
    render(<FeedItem post={mockPostWithoutComments} />);
    expect(screen.queryByTestId('comment-item')).toBeNull();
    expect(screen.queryByText(/Comments \(\d+\)/i)).not.toBeInTheDocument();
  });

  it('renders user avatar icon', () => {
    render(<FeedItem post={mockPost} />);
    // The user ID is within a specific structure, let's try to get the parent header
    // The structure is: headerDiv -> [avatarSvg, userInfoDiv -> [userIdSpan, timestampSpan]]
    const userIdElement = screen.getByText(mockPost.userId);
    const userInfoDiv = userIdElement.parentElement; // Should be the div with userInfoStyle
    const headerDiv = userInfoDiv?.parentElement; // Should be the div with headerStyle
    const avatarSvg = headerDiv?.querySelector('svg:first-child'); // Assuming avatar is the first SVG in header
    expect(avatarSvg).toBeInTheDocument();
  });

});

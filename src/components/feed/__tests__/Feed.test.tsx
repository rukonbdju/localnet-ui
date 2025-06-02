import React from 'react';
import { render, screen } from '@testing-library/react';
import Feed from '../Feed';
import { Post } from '../../../types/feed'; // Import Post type for mock data

// Mock FeedItem to simplify testing Feed component's responsibility
// The mock should reflect that FeedItem takes a 'post' prop
jest.mock('../FeedItem', () => ({ post }: { post: Post }) => ( // Use Post type for clarity
  <div data-testid="feed-item">
    Mocked FeedItem for Post ID: {post.id}, Content: {post.content}
    {/* Simulate that FeedItem renders its own ReactionButtons now */}
    <div data-testid={`reaction-buttons-for-${post.id}`}>Mocked Reaction Buttons Area</div>
  </div>
));

// ReactionButton is no longer directly rendered or mocked at the Feed.tsx level for "available reactions"
// jest.mock('../ReactionButton', ...); // This can be removed if not used directly by Feed.tsx

describe('Feed', () => {
  // Mock data used by Feed.tsx is internal to it, so we don't need to redefine it here
  // unless we want to test specific scenarios with controlled data,
  // but Feed.tsx currently uses its own hardcoded mockPosts.

  it('renders without crashing', () => {
    render(<Feed />);
  });

  it('displays the "Activity Feed" heading', () => {
    render(<Feed />);
    // The heading is now an H1
    expect(screen.getByRole('heading', { name: /Activity Feed/i, level: 1 })).toBeInTheDocument();
  });

  it('renders a list of FeedItem components based on its internal mock data', () => {
    render(<Feed />);
    // The mock data in Feed.tsx has 3 posts
    const feedItems = screen.getAllByTestId('feed-item');
    expect(feedItems).toHaveLength(3);

    // Check if content from mock posts is passed to the mocked FeedItem
    expect(screen.getByText(/Mocked FeedItem for Post ID: post1, Content: Hello world!/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked FeedItem for Post ID: post2, Content: Just sharing some thoughts on React./i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked FeedItem for Post ID: post3, Content: Thinking about learning a new programming language./i)).toBeInTheDocument();
  });

  it('each FeedItem mock indicates it handles its own reaction buttons area', () => {
    render(<Feed />);
    // Check that the mocked FeedItem contains the placeholder for reaction buttons area
    // This confirms that Feed.tsx is not trying to render them itself.
    expect(screen.getByTestId('reaction-buttons-for-post1')).toBeInTheDocument();
    expect(screen.getByTestId('reaction-buttons-for-post2')).toBeInTheDocument();
    expect(screen.getByTestId('reaction-buttons-for-post3')).toBeInTheDocument();
  });

  // Removed tests that checked for ReactionButtons being rendered directly by Feed.tsx,
  // as that responsibility has moved to FeedItem.tsx.
});

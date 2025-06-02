import React from 'react';
import { render, screen } from '@testing-library/react';
import Feed from '../Feed';

// Mock FeedItem to simplify testing Feed component's responsibility
jest.mock('../FeedItem', () => ({ post }: { post: any }) => (
  <div data-testid="feed-item">Mocked FeedItem: {post.content}</div>
));
// Mock ReactionButton as it's also used in Feed.tsx directly
jest.mock('../ReactionButton', () => ({ postId, reactionType }: { postId: string, reactionType: string }) => (
  <button data-testid={`reaction-button-${postId}-${reactionType}`}>Mocked {reactionType}</button>
));


describe('Feed', () => {
  it('renders without crashing', () => {
    render(<Feed />);
  });

  it('displays the "Feed" heading', () => {
    render(<Feed />);
    expect(screen.getByRole('heading', { name: /Feed/i })).toBeInTheDocument();
  });

  it('renders a list of FeedItem components based on mock data', () => {
    render(<Feed />);
    // The mock data in Feed.tsx has 3 posts
    const feedItems = screen.getAllByTestId('feed-item');
    expect(feedItems).toHaveLength(3);

    // Check if content from mock posts is passed (optional, depends on mock accuracy)
    expect(screen.getByText(/Mocked FeedItem: Hello world! This is the first post./i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked FeedItem: Just sharing some thoughts on React./i)).toBeInTheDocument();
  });

  it('renders ReactionButtons for each post', () => {
    render(<Feed />);
    // Each of the 3 posts should have a set of reaction buttons
    // Check for one specific type of reaction button for each post as an example
    expect(screen.getByTestId('reaction-button-post1-like')).toBeInTheDocument();
    expect(screen.getByTestId('reaction-button-post2-love')).toBeInTheDocument();
    expect(screen.getByTestId('reaction-button-post3-haha')).toBeInTheDocument();
  });
});

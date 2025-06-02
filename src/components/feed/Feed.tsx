import React from 'react';
import { Post, Comment, Reply, Reaction } from '../../types/feed';
import FeedItem from './FeedItem';

// Mock Data (remains the same)
const mockReplies: Reply[] = [
  { id: 'reply1', userId: 'user3', commentId: 'comment1', content: 'Great point!', timestamp: new Date(Date.now() - 3600 * 1000 * 1) }, // 1 hour ago
  { id: 'reply2', userId: 'user1', commentId: 'comment2', content: 'Thanks!', timestamp: new Date(Date.now() - 3600 * 1000 * 0.5) }, // 0.5 hours ago
];

const mockComments: Comment[] = [
  { id: 'comment1', userId: 'user2', postId: 'post1', content: 'This is a comment. I really like this post, it gave me a lot to think about!', timestamp: new Date(Date.now() - 3600 * 1000 * 20), replies: [mockReplies[0]] },
  { id: 'comment2', userId: 'user4', postId: 'post1', content: 'Another comment here. Well said!', timestamp: new Date(Date.now() - 3600 * 1000 * 18), replies: [mockReplies[1]] },
  { id: 'comment3', userId: 'user1', postId: 'post2', content: 'Interesting post! Could you elaborate on the second point?', timestamp: new Date(Date.now() - 3600 * 1000 * 1.5), replies: [] },
];

const mockReactions: Reaction[] = [
  { userId: 'user2', type: 'like' },
  { userId: 'user3', type: 'love' },
  { userId: 'user4', type: 'haha' },
  { userId: 'user1', type: 'like' },
];

const mockPosts: Post[] = [
  {
    id: 'post1',
    userId: 'user1',
    content: 'Hello world! This is the first post. Excited to share my thoughts with this community. Hope you find it insightful!',
    timestamp: new Date(Date.now() - 3600 * 1000 * 24),
    reactions: [mockReactions[0], mockReactions[1], mockReactions[3]],
    comments: [mockComments[0], mockComments[1]],
  },
  {
    id: 'post2',
    userId: 'user2',
    content: 'Just sharing some thoughts on React. Hooks have really changed the game for functional components. What are your favorite custom hooks?',
    timestamp: new Date(Date.now() - 3600 * 1000 * 2),
    reactions: [mockReactions[2]],
    comments: [mockComments[2]],
  },
  {
    id: 'post3',
    userId: 'user3',
    content: 'Thinking about learning a new programming language. Any suggestions? I am currently proficient in JavaScript and Python, looking for something different.',
    timestamp: new Date(Date.now() - 60 * 1000 * 30),
    reactions: [],
    comments: [],
  }
];

const Feed: React.FC = () => {
  const feedContainerStyle: React.CSSProperties = {
    maxWidth: '700px', // Max width for the feed
    margin: '0 auto', // Center the feed
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f0f2f5', // Light grey background for the page
  };

  const feedTitleStyle: React.CSSProperties = {
    fontSize: '2rem', // Larger font size for title
    fontWeight: 'bold',
    color: '#1c1e21', // Darker color for title
    textAlign: 'center',
    marginBottom: '30px', // More space below title
  };

  return (
    <div style={feedContainerStyle}>
      <h1 style={feedTitleStyle}>
        Activity Feed
      </h1>
      {mockPosts.map(post => (
        <div key={post.id} style={{ marginBottom: '25px' }}> {/* Increased spacing between posts */}
          <FeedItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;

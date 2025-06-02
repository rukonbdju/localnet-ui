import React from 'react';
import { Post, Comment, Reply, Reaction } from '../../types/feed';
import FeedItem from './FeedItem';
import ReactionButton from './ReactionButton';

// Mock Data
const mockReplies: Reply[] = [
  { id: 'reply1', userId: 'user3', commentId: 'comment1', content: 'Great point!', timestamp: new Date() },
  { id: 'reply2', userId: 'user1', commentId: 'comment2', content: 'Thanks!', timestamp: new Date() },
];

const mockComments: Comment[] = [
  { id: 'comment1', userId: 'user2', postId: 'post1', content: 'This is a comment.', timestamp: new Date(), replies: [mockReplies[0]] },
  { id: 'comment2', userId: 'user4', postId: 'post1', content: 'Another comment here.', timestamp: new Date(), replies: [mockReplies[1]] },
  { id: 'comment3', userId: 'user1', postId: 'post2', content: 'Interesting post!', timestamp: new Date(), replies: [] },
];

const mockReactions: Reaction[] = [
  { userId: 'user2', type: 'like' },
  { userId: 'user3', type: 'love' },
  { userId: 'user4', type: 'haha' },
];

const mockPosts: Post[] = [
  {
    id: 'post1',
    userId: 'user1',
    content: 'Hello world! This is the first post.',
    timestamp: new Date(Date.now() - 3600 * 1000 * 24), // 1 day ago
    reactions: [mockReactions[0], mockReactions[1]],
    comments: [mockComments[0], mockComments[1]],
  },
  {
    id: 'post2',
    userId: 'user2',
    content: 'Just sharing some thoughts on React.',
    timestamp: new Date(Date.now() - 3600 * 1000 * 2), // 2 hours ago
    reactions: [mockReactions[2]],
    comments: [mockComments[2]],
  },
  {
    id: 'post3',
    userId: 'user3',
    content: 'Thinking about learning a new programming language. Any suggestions?',
    timestamp: new Date(Date.now() - 60 * 1000 * 30), // 30 minutes ago
    reactions: [],
    comments: [],
  }
];

const Feed: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Feed</h2>
      {mockPosts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <FeedItem post={post} />
          <div style={{ marginTop: '10px', paddingLeft: '10px' }}>
            Available Reactions:
            <ReactionButton postId={post.id} reactionType="like" />
            <ReactionButton postId={post.id} reactionType="love" />
            <ReactionButton postId={post.id} reactionType="haha" />
            <ReactionButton postId={post.id} reactionType="wow" />
            <ReactionButton postId={post.id} reactionType="sad" />
            <ReactionButton postId={post.id} reactionType="angry" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;

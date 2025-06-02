import React from 'react';
import { Post } from '../../types/feed';
import CommentItem from './CommentItem';

interface FeedItemProps {
  post: Post;
}

const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  const itemStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '15px',
    marginBottom: '10px', // This margin is for spacing between FeedItem and its direct container if needed, but Feed.tsx already adds margin bottom for each post section.
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const contentStyle: React.CSSProperties = {
    marginBottom: '10px',
    color: '#333',
    fontSize: '1rem',
    lineHeight: '1.5'
  };

  const reactionsStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px'
  };

  const commentsContainerStyle: React.CSSProperties = {
    marginTop: '15px',
  };

  const commentsTitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px'
  };

  return (
    <div style={itemStyle}>
      <p style={contentStyle}>{post.content}</p>
      <div style={reactionsStyle}>
        Reactions: {post.reactions.map(reaction => reaction.type).join(', ') || 'No reactions yet'}
      </div>
      <div style={commentsContainerStyle}>
        <h4 style={commentsTitleStyle}>Comments:</h4>
        {post.comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default FeedItem;

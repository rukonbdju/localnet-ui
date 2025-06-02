import React from 'react';
import { Comment } from '../../types/feed';
import ReplyItem from './ReplyItem';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const itemStyle: React.CSSProperties = {
    border: '1px solid #eee',
    padding: '10px',
    marginTop: '10px', // Replaces fixed margin-left and border-left for a more encapsulated style
    backgroundColor: '#f9f9f9', // Slightly different background
    borderRadius: '3px',
  };

  const contentStyle: React.CSSProperties = {
    marginBottom: '5px',
    color: '#444',
    fontSize: '0.95rem',
  };

  const repliesContainerStyle: React.CSSProperties = {
    marginTop: '10px',
  };

  const repliesTitleStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '5px'
  };

  return (
    <div style={itemStyle}>
      <p style={contentStyle}>{comment.content} <span style={{fontSize: '0.8em', color: '#777'}}>- User: {comment.userId}</span></p>
      {comment.replies && comment.replies.length > 0 && (
        <div style={repliesContainerStyle}>
          <h5 style={repliesTitleStyle}>Replies:</h5>
          {comment.replies.map(reply => (
            <ReplyItem key={reply.id} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;

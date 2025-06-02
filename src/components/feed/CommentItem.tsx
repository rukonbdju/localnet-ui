import React from 'react';
import { Comment } from '../../types/feed';
import ReplyItem from './ReplyItem';
import { FaUserCircle } from 'react-icons/fa'; // For avatar
import { formatDistanceToNow } from 'date-fns'; // For relative timestamps

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const itemStyle: React.CSSProperties = {
    backgroundColor: '#f0f2f5', // Slightly different background for comments
    borderRadius: '6px',
    padding: '8px 12px',
    marginTop: '8px', // Space between comments
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4px',
  };

  const avatarStyle: React.CSSProperties = {
    marginRight: '8px',
    color: '#65676b', // Slightly different avatar color
    fontSize: '1.8rem', // Smaller avatar for comments
  };

  const userInfoStyle: React.CSSProperties = {
    backgroundColor: '#e4e6eb', // Bubble background for comment content
    padding: '8px 12px',
    borderRadius: '18px', // Bubble shape
    flexGrow: 1,
  };

  const userNameStyle: React.CSSProperties = {
    fontWeight: '600',
    color: '#050505',
    fontSize: '0.85rem',
    display: 'block', // Separate line for username
  };

  const contentStyle: React.CSSProperties = {
    color: '#1c1e21',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    whiteSpace: 'pre-wrap',
  };

  const timestampStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    color: '#606770',
    marginLeft: 'calc(1.8rem + 8px + 12px)', // Align with start of text bubble, accounting for avatar, margin, padding
    marginTop: '2px', // Space between bubble and timestamp
  };

  const repliesContainerStyle: React.CSSProperties = {
    marginLeft: 'calc(1.8rem + 8px)', // Indent replies to align with comment text start (approx)
    paddingTop: '4px', // Space above replies section
    marginTop: '4px',
  };

  const repliesTitleStyle: React.CSSProperties = { // This might not be needed if replies are clearly distinct
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#606770',
    marginBottom: '4px',
  };

  return (
    <div style={itemStyle}>
      <div style={headerStyle}>
        <FaUserCircle style={avatarStyle} />
        <div style={userInfoStyle}>
          <span style={userNameStyle}>{comment.userId}</span>
          <p style={contentStyle}>{comment.content}</p>
        </div>
      </div>
      <span style={timestampStyle}>{formatDistanceToNow(comment.timestamp, { addSuffix: true })}</span>

      {comment.replies && comment.replies.length > 0 && (
        <div style={repliesContainerStyle}>
          {/* <h5 style={repliesTitleStyle}>Replies:</h5> // Decided to remove explicit "Replies:" title for cleaner look */}
          {comment.replies.map(reply => (
            <ReplyItem key={reply.id} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;

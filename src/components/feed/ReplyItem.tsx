import React from 'react';
import { Reply } from '../../types/feed';
import { FaUserCircle } from 'react-icons/fa'; // For avatar
import { formatDistanceToNow } from 'date-fns'; // For relative timestamps

interface ReplyItemProps {
  reply: Reply;
}

const ReplyItem: React.FC<ReplyItemProps> = ({ reply }) => {
  const itemStyle: React.CSSProperties = {
    // No specific background, relies on CommentItem's background. Or a very subtle one if needed.
    // backgroundColor: '#fafafa', // Very subtle distinction if needed
    borderRadius: '6px', // Matching comment's bubble style potentially
    padding: '4px 0px', // Minimal vertical padding, horizontal handled by parent
    marginTop: '6px', // Space between replies
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top for replies
    marginBottom: '2px',
  };

  const avatarStyle: React.CSSProperties = {
    marginRight: '6px',
    color: '#8a8d91', // Even more subdued avatar color for replies
    fontSize: '1.5rem', // Smaller avatar for replies
    marginTop: '2px', // Align with first line of text better
  };

  const userInfoStyle: React.CSSProperties = {
    backgroundColor: '#e4e6eb', // Consistent bubble background with comments
    padding: '6px 10px', // Slightly smaller padding for replies
    borderRadius: '16px', // Bubble shape
    flexGrow: 1,
  };

  const userNameStyle: React.CSSProperties = {
    fontWeight: '600',
    color: '#050505',
    fontSize: '0.8rem', // Smaller font for reply user
    display: 'block',
  };

  const contentStyle: React.CSSProperties = {
    color: '#1c1e21',
    fontSize: '0.85rem', // Slightly smaller font for reply content
    lineHeight: '1.3',
    whiteSpace: 'pre-wrap',
  };

  const timestampStyle: React.CSSProperties = {
    fontSize: '0.7rem', // Smaller timestamp for replies
    color: '#606770',
    marginLeft: 'calc(1.5rem + 6px + 10px)', // Align with start of text bubble
    marginTop: '1px',
  };

  return (
    <div style={itemStyle}>
      <div style={headerStyle}>
        <FaUserCircle style={avatarStyle} />
        <div style={userInfoStyle}>
          <span style={userNameStyle}>{reply.userId}</span>
          <p style={contentStyle}>{reply.content}</p>
        </div>
      </div>
      <span style={timestampStyle}>{formatDistanceToNow(reply.timestamp, { addSuffix: true })}</span>
    </div>
  );
};

export default ReplyItem;

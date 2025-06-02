import React from 'react';
import { Reply } from '../../types/feed';

interface ReplyItemProps {
  reply: Reply;
}

const ReplyItem: React.FC<ReplyItemProps> = ({ reply }) => {
  const itemStyle: React.CSSProperties = {
    border: '1px solid #f0f0f0',
    padding: '8px',
    marginTop: '5px', // Replaces fixed margin-left and border-left
    backgroundColor: '#fdfdfd', // Slightly different background from comment
    borderRadius: '3px',
  };

  const contentStyle: React.CSSProperties = {
    color: '#555',
    fontSize: '0.9rem',
  };

  return (
    <div style={itemStyle}>
      <p style={contentStyle}>{reply.content} <span style={{fontSize: '0.8em', color: '#888'}}>- User: {reply.userId}</span></p>
    </div>
  );
};

export default ReplyItem;

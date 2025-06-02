import React from 'react';
import { Reaction } from '../../types/feed';

interface ReactionButtonProps {
  postId: string;
  reactionType: Reaction['type'];
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ postId, reactionType }) => {
  const handleClick = () => {
    console.log(`Post ID: ${postId}, Reaction Type: ${reactionType}`);
  };

  const buttonStyle: React.CSSProperties = {
    padding: '6px 12px',
    marginRight: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    textTransform: 'capitalize',
    fontSize: '0.85rem',
    minWidth: '60px', // Ensure buttons have a decent minimum width
    textAlign: 'center',
  };

  // Hover effect can be added with pseudo-classes in CSS, but for inline, you might use state or a library.
  // For simplicity, we'll keep it as is.

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
      onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
      onMouseOut={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
    >
      {reactionType}
    </button>
  );
};

export default ReactionButton;

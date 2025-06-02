import React from 'react';
import { IconType } from 'react-icons';
import { FaThumbsUp, FaHeart, FaLaugh, FaGrinStars, FaSadCry, FaAngry } from 'react-icons/fa';
import { Reaction } from '../../types/feed';

interface ReactionButtonProps {
  postId: string;
  reactionType: Reaction['type'];
  icon?: IconType;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ postId, reactionType, icon: Icon }) => {
  const handleClick = () => {
    console.log(`Post ID: ${postId}, Reaction Type: ${reactionType}`);
  };

  const buttonStyle: React.CSSProperties = {
    padding: '6px 10px', // Adjusted padding
    border: 'none', // No border to match FeedItem's action buttons
    borderRadius: '4px',
    backgroundColor: 'transparent', // Transparent background
    color: '#606770', // Default text/icon color
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center content
    gap: '6px', // Space between icon and text
    fontSize: '0.9rem',
    fontWeight: '600', // Bold text
    flexGrow: 1, // Allow button to grow
    textAlign: 'center',
    textTransform: 'capitalize', // Keep this if desired
  };

  const iconStyle: React.CSSProperties = {
    // marginRight: Icon && reactionType ? '5px' : '0px', // Gap handles this now
    fontSize: '1rem', // Ensure icon size is consistent
  };

  const getDefaultIcon = (type: Reaction['type']) => {
    switch (type) {
      case 'like': return FaThumbsUp;
      case 'love': return FaHeart;
      case 'haha': return FaLaugh;
      case 'wow': return FaGrinStars;
      case 'sad': return FaSadCry;
      case 'angry': return FaAngry;
      default: return null;
    }
  };

  const DisplayIcon = Icon || getDefaultIcon(reactionType);

  // Simple hover effect
  const [isHovered, setIsHovered] = React.useState(false);
  const hoverStyle: React.CSSProperties = isHovered ? { backgroundColor: '#f0f2f5' } : {};

  return (
    <button
      onClick={handleClick}
      style={{ ...buttonStyle, ...hoverStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`React with ${reactionType}`}
    >
      {DisplayIcon && <DisplayIcon style={iconStyle} />}
      <span>{reactionType}</span>
    </button>
  );
};

export default ReactionButton;

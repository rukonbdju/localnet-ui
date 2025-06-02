import React from 'react';
import { Post, Reaction as ReactionType } from '../../types/feed';
import CommentItem from './CommentItem';
import ReactionButton from './ReactionButton';
import { IconType } from 'react-icons';
import { FaThumbsUp, FaHeart, FaLaugh, FaGrinStars, FaSadCry, FaAngry, FaCommentAlt, FaUserCircle } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns'; // For relative timestamps

interface FeedItemProps {
  post: Post;
}

const reactionIconMap: Record<ReactionType['type'], IconType> = {
  like: FaThumbsUp, love: FaHeart, haha: FaLaugh, wow: FaGrinStars, sad: FaSadCry, angry: FaAngry,
};

const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  const itemStyle: React.CSSProperties = {
    border: '1px solid #dadde1', // Lighter border
    padding: '0', // Padding will be handled by inner elements
    backgroundColor: '#ffffff', // White background for card
    borderRadius: '8px', // More rounded corners
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', // Softer shadow
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #ebedf0', // Separator for header
  };

  const avatarStyle: React.CSSProperties = {
    marginRight: '10px',
    color: '#4b4f56', // Placeholder avatar color
  };

  const userInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const userNameStyle: React.CSSProperties = {
    fontWeight: '600',
    color: '#050505',
    fontSize: '0.9rem',
  };

  const timestampStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    color: '#606770',
  };

  const contentStyle: React.CSSProperties = {
    padding: '16px',
    color: '#1c1e21', // Main text color
    fontSize: '1rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap', // Preserve line breaks in content
  };

  const reactionsDisplayStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px 12px', // Padding for reactions display
    fontSize: '0.9rem',
    color: '#606770', // Subdued color for reaction text
  };

  const reactionIconStyle: React.CSSProperties = {
    marginRight: '3px', // Space between icons if multiple types are shown
    fontSize: '1.1rem', // Slightly larger icons for display
  };

  const actionsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around', // Distribute space
    padding: '8px 16px', // Padding for action buttons
    borderTop: '1px solid #ebedf0', // Separator for actions
  };

  const actionButtonStyle: React.CSSProperties = { // Common style for action buttons (like, comment)
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent', // Transparent background
    color: '#606770', // Icon/text color
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px', // Space between icon and text in button
    fontSize: '0.9rem',
    fontWeight: '600',
  };

  const commentsContainerStyle: React.CSSProperties = {
    padding: '0 16px 16px', // Padding for comments section
    borderTop: '1px solid #ebedf0', // Separator for comments
    marginTop: '0', // No extra margin, border handles separation
  };

  const commentsTitleStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1c1e21',
    paddingTop: '12px', // Space above title
    marginBottom: '8px', // Space below title
  };

  const availableReactionTypes: ReactionType['type'][] = ['like', 'love', 'haha', 'wow', 'sad', 'angry'];

  return (
    <div style={itemStyle}>
      <div style={headerStyle}>
        <FaUserCircle size={36} style={avatarStyle} />
        <div style={userInfoStyle}>
          <span style={userNameStyle}>{post.userId}</span>
          <span style={timestampStyle}>{formatDistanceToNow(post.timestamp, { addSuffix: true })}</span>
        </div>
      </div>

      <p style={contentStyle}>{post.content}</p>

      {post.reactions.length > 0 && (
        <div style={reactionsDisplayStyle}>
          {Object.entries(
            post.reactions.reduce((acc, reaction) => {
              acc[reaction.type] = (acc[reaction.type] || 0) + 1;
              return acc;
            }, {} as Record<ReactionType['type'], number>)
          ).map(([type, count]) => {
            const Icon = reactionIconMap[type as ReactionType['type']];
            return Icon ? <Icon key={type} style={{...reactionIconStyle, color: '#007bff' }} title={type} /> : null; // Example color for like
          })}
          <span style={{ marginLeft: '8px' }}>{post.reactions.length}</span>
        </div>
      )}
      {post.reactions.length === 0 && (
         <div style={{...reactionsDisplayStyle, paddingBottom: '12px'}}>
            Be the first to react!
         </div>
      )}

      <div style={actionsContainerStyle}>
        {availableReactionTypes.map(type => (
          <ReactionButton
            key={type}
            postId={post.id}
            reactionType={type}
            icon={reactionIconMap[type]}
            // Pass common styles to ReactionButton or override its internal ones for consistency
          />
        ))}
        <button
            style={{...actionButtonStyle, flexGrow: 1, justifyContent: 'center'}}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f2f5'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <FaCommentAlt /> Comment
        </button>
      </div>

      {post.comments.length > 0 && (
        <div style={commentsContainerStyle}>
          <h4 style={commentsTitleStyle}>Comments ({post.comments.length})</h4>
          {post.comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedItem;

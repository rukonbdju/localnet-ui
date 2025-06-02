import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactionButton from '../ReactionButton';
import { Reaction } from '../../../types/feed';
import { FaThumbsUp } from 'react-icons/fa'; // Import an icon for testing

describe('ReactionButton', () => {
  const postId = 'post1';
  const reactionType: Reaction['type'] = 'like';

  it('renders without crashing', () => {
    render(<ReactionButton postId={postId} reactionType={reactionType} icon={FaThumbsUp} />);
  });

  it('displays the reaction type text (now as part of accessible name or if icon fails)', () => {
    render(<ReactionButton postId={postId} reactionType={reactionType} icon={FaThumbsUp} />);
    // The text is inside a span now, and the button has an aria-label
    expect(screen.getByRole('button', { name: `React with ${reactionType}` })).toBeInTheDocument();
    expect(screen.getByText(reactionType)).toBeInTheDocument(); // Check if text label is still rendered
  });

  it('renders the icon when provided', () => {
    render(<ReactionButton postId={postId} reactionType={reactionType} icon={FaThumbsUp} />);
    // Check for SVG element as icons are rendered as SVGs
    const button = screen.getByRole('button', { name: `React with ${reactionType}` });
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('calls console.log with postId and reactionType on click', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<ReactionButton postId={postId} reactionType={reactionType} icon={FaThumbsUp} />);

    const button = screen.getByRole('button', { name: `React with ${reactionType}` });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith(`Post ID: ${postId}, Reaction Type: ${reactionType}`);
    consoleSpy.mockRestore();
  });

  it('applies hover style on mouse enter and removes on mouse leave', () => {
    render(<ReactionButton postId={postId} reactionType={reactionType} icon={FaThumbsUp} />);
    const button = screen.getByRole('button', { name: `React with ${reactionType}` });

    // Function to check if color is transparent (accounts for JSDOM's rgba(0,0,0,0))
    const isTransparent = (color: string) => color === 'transparent' || color === 'rgba(0, 0, 0, 0)';

    const initialStyle = window.getComputedStyle(button);
    expect(isTransparent(initialStyle.backgroundColor)).toBe(true); // Initial background

    fireEvent.mouseEnter(button);
    // The hover style sets a specific color, e.g., '#f0f2f5' which is rgb(240, 242, 245)
    // We check that it's NOT transparent.
    expect(isTransparent(button.style.backgroundColor)).toBe(false);
    expect(button.style.backgroundColor).toBe('rgb(240, 242, 245)'); // Check for the specific hover color #f0f2f5

    fireEvent.mouseLeave(button);
    // JSDOM might set it back to empty string if style is removed, or the actual transparent value.
    // If it's empty string, computed style will be transparent.
    // If it's set to 'transparent', computed style will be transparent.
    // Our implementation sets it back to 'transparent' via the style prop.
    expect(isTransparent(button.style.backgroundColor)).toBe(true);
  });
});

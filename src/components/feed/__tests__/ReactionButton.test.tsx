import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactionButton from '../ReactionButton';
import { Reaction } from '../../../types/feed';

describe('ReactionButton', () => {
  const postId = 'post1';
  const reactionType: Reaction['type'] = 'like';

  it('renders without crashing', () => {
    render(<ReactionButton postId={postId} reactionType={reactionType} />);
  });

  it('displays the reaction type text', () => {
    render(<ReactionButton postId={postId} reactionType={reactionType} />);
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
  });

  it('calls console.log with postId and reactionType on click', () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, 'log');

    render(<ReactionButton postId={postId} reactionType={reactionType} />);

    const button = screen.getByRole('button', { name: reactionType });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith(`Post ID: ${postId}, Reaction Type: ${reactionType}`);

    // Restore original console.log
    consoleSpy.mockRestore();
  });
});

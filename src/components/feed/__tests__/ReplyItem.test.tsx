import React from 'react';
import { render, screen } from '@testing-library/react';
import ReplyItem from '../ReplyItem';
import { Reply } from '../../../types/feed';

describe('ReplyItem', () => {
  const mockReply: Reply = {
    id: 'replyTest1',
    userId: 'userTest4',
    commentId: 'commentTest1',
    content: 'This is a test reply for ReplyItem.',
    timestamp: new Date(), // Will be formatted by mocked date-fns
  };

  it('renders without crashing', () => {
    render(<ReplyItem reply={mockReply} />);
  });

  it('displays the user ID', () => {
    render(<ReplyItem reply={mockReply} />);
    expect(screen.getByText(mockReply.userId)).toBeInTheDocument();
  });

  it('displays the reply content', () => {
    render(<ReplyItem reply={mockReply} />);
    expect(screen.getByText(mockReply.content)).toBeInTheDocument();
  });

  it('displays the mocked timestamp', () => {
    render(<ReplyItem reply={mockReply} />);
    expect(screen.getByText('mocked time ago')).toBeInTheDocument();
  });

  it('renders user avatar icon', () => {
    render(<ReplyItem reply={mockReply} />);
    // Similar check for SVG in the reply item's header part
    const replyBubble = screen.getByText(mockReply.content).closest('div'); // Find the content bubble
    const header = replyBubble?.parentElement; // Parent of the bubble is where avatar is a sibling
    expect(header?.querySelector('svg')).toBeInTheDocument();
  });

  it('reply content is within a styled bubble', () => {
    render(<ReplyItem reply={mockReply} />);
    const contentElement = screen.getByText(mockReply.content);
    // Check bubble style for reply
    expect(contentElement.parentElement?.style.backgroundColor).toBe('rgb(228, 230, 235)'); // #e4e6eb
    expect(contentElement.parentElement?.style.borderRadius).toBe('16px'); // Note: 16px for replies in implementation
  });
});

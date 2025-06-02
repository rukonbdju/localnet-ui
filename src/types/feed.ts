export interface Reaction {
  userId: string;
  type: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry';
}

export interface Reply {
  id: string;
  userId: string;
  commentId: string;
  content: string;
  timestamp: Date;
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  content: string;
  timestamp: Date;
  replies: Reply[];
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  reactions: Reaction[];
  comments: Comment[];
}

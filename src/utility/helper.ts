import { Comment } from "../data/comments";

export function updateComment(
  comments: Comment[],
  targetCommentId: number,
  newReply: string
) {

  // Deep clone
  const allComments = JSON.parse(JSON.stringify(comments));

  // Find the comment by ID
  for (const targetedComment of allComments) {
    if (targetedComment.id === targetCommentId) {
      // Create a new comment with the reply
      targetedComment.replies.push({
        id: Math.max(...comments.map((c) => c.id)) + 1, // Generate unique ID
        message: newReply,
        replies: [],
      });
    }

    if (targetedComment.replies.length > 0) {
      targetedComment.replies = updateComment(
        targetedComment.replies,
        targetCommentId,
        newReply
      );
    }
  }

  
  return allComments;
}
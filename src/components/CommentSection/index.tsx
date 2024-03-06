import { useState } from "react";


// Interface for a single comment
interface Comment {
  id: number;
  message: string;
  replies?: Comment[]; // Optional array of replies (nested comments)
}

const Comment: React.FC<Comment> = ({ id, message, replies }) => {
  const [showReply, toggleReply] = useState(false);

  // Render the comment and optionally render replies recursively
  return (
    <div className="p-3 m-3 flex flex-col border border-black rounded-lg">
      <div key={id} className="flex justify-between items-center">
        <p>{message}</p>

        <div className="flex text-blue-500 font-medium gap-4">
          {/* if there're replies (in a Comment or a subComment) then "View Reply" */}
          {replies?.length !== 0 && (
            <span
              onClick={() => toggleReply(!showReply)}
              className="cursor-pointer"
            >
              View Reply
            </span>
          )}
          <span className="cursor-pointer">Add Reply</span>
        </div>
      </div>

      {showReply &&
        replies &&
        replies.map((reply) => (
          <Comment key={reply.id} {...reply} /> // Pass all props to nested Comment components
        ))}
    </div>
  );
};


// Interface for the entire comment data structure
interface CommentsData {
  comments: Comment[];
}

const CommentList: React.FC<CommentsData> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <>
          <Comment key={comment.id} {...comment} />
        </>
      ))}
    </div>
  );
};


export default CommentList;
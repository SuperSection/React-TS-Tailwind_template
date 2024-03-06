import { useState } from "react";
import { Comment } from "../../data/comments";


interface CommentProps extends Comment {
  addReply: (commentId: number, replyMessage: string) => void;
}


const CommentComponent: React.FC<CommentProps> = ({
  addReply,
  id,
  message,
  replies,
}) => {
  const [showReply, toggleReply] = useState(false);
  const [showAddReply, toggleAddReply] = useState(false);


  // Use state to manage the reply text
  const [replyText, setReplyText] = useState("");

  // Handle Enter key press to add reply
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && replyText.trim() !== "") {
      addReply(id, replyText.trim()); // Only call addReply if text is non-empty
      setReplyText(""); // Clear the input field after adding reply
    }
  };



  // Render the comment and optionally render replies recursively
  return (
    <div className="p-2 px-3 m-3 flex flex-col border border-black rounded-lg">
      <div key={id} className="flex justify-between items-center">
        <p>{message}</p>

        <div className="flex text-blue-500 font-medium gap-4">
          {replies?.length !== 0 && (
            <span
              onClick={() => toggleReply(!showReply)}
              className="cursor-pointer"
            >
              View Reply
            </span>
          )}

          <span
            onClick={() => toggleAddReply(!showAddReply)}
            className="cursor-pointer"
          >
            Add Reply
          </span>
        </div>
      </div>

      {showReply &&
        replies &&
        replies.map((reply) => (
          <CommentComponent key={reply.id} addReply={addReply} {...reply} /> // Pass all props to nested Comment components
        ))}

      {showAddReply && (
        <input
          type="text"
          autoFocus
          placeholder="Your reply..."
          className="border border-black rounded-md p-1.5 px-2 mt-1.5"
          value={replyText}
          onChange={(event) => setReplyText(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => toggleAddReply(!showAddReply)}
        />
      )}
    </div>
  );
};


export default CommentComponent;
import { Comment } from "../../data/comments";
import CommentComponent from "./CommentComponent";


interface CommentsListProps {
  comments: Comment[];
  addNewReply: (commentId: number, replyMessage: string) => void;
}

const CommentList: React.FC<CommentsListProps> = ({ comments, addNewReply }) => {
  return (
    <div>
      {comments.map((comment) => (
        <>
          <CommentComponent key={comment.id} addReply={addNewReply} {...comment} />
        </>
      ))}
    </div>
  );
};


export default CommentList;
import { useState } from "react";
import commentsData from "./data/comments";
import { updateComment } from "./utility/helper";
import CommentList from "./components/CommentSection/CommentList";


export default function App() {
  const [comments, setComments] = useState(commentsData);

  function addNewReply(commentId: number, replyMessage: string) {
    const newUpdatedComments = updateComment(comments, commentId, replyMessage);
    setComments(newUpdatedComments);
  }
  
  return (
    <>
      <CommentList comments={comments} addNewReply={addNewReply} />
    </>
  );
}
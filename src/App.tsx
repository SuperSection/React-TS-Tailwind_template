import CommentList from "./components/CommentSection";
import commentsData from "./data/comments";


export default function App() {
  return (
    <>
      <CommentList comments={commentsData} />
    </>
  );
}
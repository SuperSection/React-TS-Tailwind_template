// Interface for a single comment
export interface Comment {
  id: number;
  message: string;
  replies: Comment[]; // Optional array of replies (nested comments)
}


const commentsData: Comment[] = [
  {
    id: 0,
    message: "Comment 1",
    replies: [
      {
        id: 1,
        message: "Reply 1",
        replies: [],
      },
      {
        id: 2,
        message: "Reply 2",
        replies: [],
      },
      {
        id: 3,
        message: "Reply 3",
        replies: [
          {
            id: 4,
            message: "Sub-comment for Reply 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    message: "Comment 2",
    replies: [],
  },
];


export default commentsData;
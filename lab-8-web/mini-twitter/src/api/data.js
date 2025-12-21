let posts = [
  { id: 1, name: "Mai", content: "Hello from post 1" },
  { id: 2, name: "Sara", content: "This is another post" },
];

let comments = [
  { id: 1, postId: 1, comment: "Nice post!" },
  { id: 2, postId: 1, comment: "I agree" },
  { id: 3, postId: 2, comment: "Interesting" },
];

let postIdCounter = posts.length + 1;
let commentIdCounter = comments.length + 1;
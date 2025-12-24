import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let posts = [
  { id: 1, name: "Mai", content: "Hello from post 1" },
  { id: 2, name: "Sara", content: "This is another post" }
  
];

let comments = [
  { id: 1, postId: 1, comment: "Nice post!" },
  { id: 2, postId: 1, comment: "I agree" },
  { id: 3, postId: 2, comment: "Interesting" }
];

let postIdCounter = posts.length + 1;
let commentIdCounter = 4;

app.get("/", (req, res) => {
  res.send("Mini Twitter API is running ");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  const postComments = comments.filter(c => c.postId === id);
  res.json({ post, comments: postComments });
});

app.get("/posts/:id/comments", (req, res) => {
  const id = Number(req.params.id);
  const postComments = comments.filter(c => c.postId === id);
  if (postComments.length === 0) return res.status(404).json({ error: "No comments found" });
  res.json(postComments);
});

app.post("/posts/:id/comments", (req, res) => {
  const postId = Number(req.params.id);
  const { comment } = req.body || {};

  const post = posts.find(p => p.id === postId);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (!comment) {
    return res.status(400).json({ error: "Comment text required" });
  }

  const newComment = {
    id: commentIdCounter++,
    postId,
    comment
  };

  comments.push(newComment);
  res.status(201).json(newComment);
});


app.post("/posts", (req, res) => {
  const { name, content } = req.body || {};

  if (!name || !content) {
    return res.status(400).json({ error: "Name and content required" });
  }

  const newPost = { id: postIdCounter++, name, content };
  posts.push(newPost);

  res.status(201).json(newPost);
});



app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  const { name, content } = req.body;
  if (name) post.name = name;
  if (content) post.content = content;

  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Post not found" });

  posts.splice(index, 1);
  comments = comments.filter(c => c.postId !== id);

  res.json({ message: "Post deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
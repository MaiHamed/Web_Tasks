const MOCK_SERVER_URL = "https://2ed0ede1-ed65-4a97-870c-896daa36b457.mock.pstmn.io";


export const getAllPosts = async () => {
  // TODO:
  // 1. Fetch all posts from `${MOCK_SERVER_URL}/posts`.
  // 2. Handle non-ok responses (e.g., if (!response.ok) throw new Error(...)).
  // 3. Parse and return the JSON data.
  // 4. Wrap in a try...catch block to handle errors.
  console.log("Students will implement getAllPosts here.");
  // Return an empty array for now to prevent UI crashes.
  return [];
};

export const getPostDetails = async (postId) => {
  // TODO:
  // 1. Fetch a single post from `${MOCK_SERVER_URL}/posts/${postId}`.
  // 2. Fetch comments for that post from `${MOCK_SERVER_URL}/posts/${postId}/comments`.
  // 3. Handle errors for *both* fetches.
  // 4. Return an object containing both: { post: postData, comments: commentsData }
  console.log(`Students will implement getPostDetails for post ${postId} here.`);
  // Return mock data for now.
  return { post: null, comments: [] };
};

export const createNewPost = async (newPostData) => {
  // `newPostData` will be an object like { name: '...', content: '...' }
  // TODO:
  // 1. Send a `POST` request to `${MOCK_SERVER_URL}/posts`.
  // 2. The request `method` should be `'POST'`.
  // 3. The `headers` should include `'Content-Type': 'application/json'`.
  // 4. The `body` should be `JSON.stringify(newPostData)`.
  // 5. Handle errors.
  console.log("Students will implement createNewPost here.", newPostData);
};

export const createNewComment = async (postId, newCommentData) => {
  // `newCommentData` will be an object like { comment: '...' }
  // TODO:
  // 1. Send a `POST` request to `${MOCK_SERVER_URL}/posts/${postId}/comments`.
  // 2. Include the correct `method`, `headers`, and `body` (JSON-stringified).
  // 3. Handle errors.
  console.log(`Students will implement createNewComment for post ${postId} here.`, newCommentData);
};

import { getUser, signOut } from './services/auth-service.js';
import { getImagePosts } from './services/image-post.js';
import { addComment, getAllComments, onComment } from './services/comment.js';
import { getProfile } from './services/profile.js';

import { protectPage } from './utils.js';
import createUser from './components/User.js';
import createImagePost from './components/ImagePost.js';

let user = null;
let profile = null;
let imagePosts = [];
let comments = [];

async function handlePageLoad() {
  imagePosts = await getImagePosts();
  user = getUser();
  profile = await getProfile();
  comments = await getAllComments();

  protectPage(user);

  display();
}

async function handleSignOut() {
  signOut();
}

async function handleAddComment(comment, postId) {
  const data = {
    text_content: comment,
    image_post_id: postId,
    profile_id: profile.id,
  };
  await addComment(data);

  onComment((comment) => {
    comments.unshift(comment);
    display();
  });
  console.log(comments);
  // display();
}

const User = createUser(document.querySelector('#user'), { handleSignOut });
const PostList = createImagePost(document.getElementById('post-list'), {
  handleAddComment,
});

function display() {
  User({ user });
  PostList({ imagePosts });
}

handlePageLoad();

import { getUser, signOut } from './services/auth-service.js';
import { getImagePosts } from './services/image-post.js';

import { protectPage } from './utils.js';
import createUser from './components/User.js';
import createImagePost from './components/ImagePost.js';
import { addComment } from './services/comment.js';

let user = null;
let profile = null;
let imagePosts = [];

async function handlePageLoad() {
  user = getUser();
  imagePosts = await getImagePosts();

  protectPage(user);

  display();
}

async function handleSignOut() {
  signOut();
}

async function handleAddComment(comment) {
  await addComment(comment);
  display();
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

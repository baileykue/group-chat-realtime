import { getUser, signOut } from './services/auth-service.js';
import { getImagePosts } from './services/image-post.js';
import { addComment, getComments } from './services/comment.js';

import { protectPage } from './utils.js';
import createUser from './components/User.js';
import createImagePost from './components/ImagePost.js';
import createComments from './components/Comments.js';

let user = null;
let profile = null;
let imagePosts = [];
// let comments = [];

async function handlePageLoad() {
  user = getUser();
  //profile = await getProfil();
  imagePosts = await getImagePosts();
  //   comments = await getComments();
  //   console.log(comments);

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
//const Comments = createComments(document.querySelector('.comment-div'));

function display() {
  User({ user });
  PostList({ imagePosts });
  //Comments({ comments });
}

handlePageLoad();

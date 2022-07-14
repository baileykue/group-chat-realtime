import { getUser, signOut } from './services/auth-service.js';
import { getImagePosts } from './services/image-post.js';

import { protectPage } from './utils.js';
//import createUser from './components/User.js';
import createImagePost from './components/ImagePost.js';

let user = null;
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

//const User = createUser(document.querySelector('#user'), { handleSignOut });
const PostList = createImagePost(document.getElementById('post-list'));

function display() {
  //User({ user });
  PostList({ imagePosts });
}

handlePageLoad();

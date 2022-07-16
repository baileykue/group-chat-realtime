import { getComments } from '../services/comment.js';
import createComments from './Comments.js';
let comments = [];

export default function createImagePost(postList, { handleAddComment }) {
  return async ({ imagePosts }) => {
    postList.innerHTML = '';

    for (const imagePost of imagePosts) {
      comments = await getComments(imagePost.id);
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment-div');
      commentDiv.classList.add('hidden');
      const Comments = createComments(commentDiv);

      const post = Post({ imagePost, commentDiv, handleAddComment });
      Comments({ comments });

      postList.append(post);
    }
  };
}

function Post({ imagePost, commentDiv, handleAddComment }) {
  const div = document.createElement('div');
  div.classList.add('post-card');

  const img = document.createElement('img');
  img.src = imagePost.image_url;

  const p = document.createElement('p');
  p.classList.add('caption');
  p.textContent = imagePost?.caption;

  const commentButton = document.createElement('button');
  const commentIcon = document.createElement('img');
  commentIcon.src = '../assets/comment.png';
  commentIcon.classList.add('comment-icon');

  commentButton.append(commentIcon);
  commentButton.addEventListener('click', async () => {
    form.classList.remove('hidden');
    commentDiv.classList.remove('hidden');
    commentButton.classList.add('hidden');
  });

  const form = document.createElement('form');
  form.classList.add('hidden');

  const button = document.createElement('button');
  button.textContent = 'Leave comment';

  const input = document.createElement('input');
  input.name = 'comment';

  form.append(input, button);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    await handleAddComment(formData.get('comment'));
    form.reset();
  });

  div.append(img, p, commentButton, commentDiv, form);

  return div;
}

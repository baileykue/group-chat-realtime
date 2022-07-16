export default function createImagePost(postList, { handleAddComment }) {
  return ({ imagePosts }) => {
    postList.innerHTML = '';

    for (const imagePost of imagePosts) {
      const post = Post({ imagePost, handleAddComment });
      postList.append(post);
    }
  };
}

function Post({ imagePost, handleAddComment }) {
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
  commentButton.addEventListener('click', () => {
    form.classList.remove('hidden');
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
    handleAddComment(formData.get('comment'));
    form.reset();
  });

  div.append(img, p, commentButton, form);

  return div;
}

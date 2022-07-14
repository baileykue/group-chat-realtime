export default function createImagePost(postList) {
  return ({ imagePosts }) => {
    postList.innerHTML = '';

    for (const imagePost of imagePosts) {
      const post = Post({ imagePost });
      postList.append(post);
    }
  };
}

function Post({ imagePost }) {
  const div = document.createElement('div');
  div.classList.add('post-card');

  const img = document.createElement('img');
  img.src = imagePost.image_url;

  const p = document.createElement('p');
  p.textContent = imagePost?.caption;

  div.append(img, p);

  return div;
}

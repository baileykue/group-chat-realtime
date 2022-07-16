export default function createComments(list) {
  return ({ comments }) => {
    list.innerHTML = '';

    for (const comment of comments) {
      const item = Comment({ comment });
      list.append(item);
    }
  };
}

function Comment({ comment }) {
  const div = document.createElement('div');
  div.classList.add('comment');

  const avatar = document.createElement('img');
  avatar.src = comment.profiles?.avatar;

  const username = document.createElement('p');
  username.classList.add('comment-username');
  username.textContent = comment.profiles?.username;

  const commentText = document.createElement('p');
  commentText.textContent = comment.text_content;

  div.append(avatar, username, commentText);

  return div;
}

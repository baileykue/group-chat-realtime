export default function createComments(list) {
  console.log(list);
  return ({ comments }) => {
    list.innerHTML = '';

    for (const comment of comments) {
      const item = Comment({ comment });
      list.append(item);
    }
  };
}

function Comment({ comment }) {
  console.log(comment);
  const div = document.createElement('div');
  div.classList.add('comment');

  //   const avatar = document.createElement('img');
  //   avatar.src = comment.profile.avatar;

  //   const username = document.createElement('p');
  //   username.textContent = comment.profile.username;

  const commentText = document.createElement('p');
  commentText.textContent = comment.text_content;

  div.append(commentText);

  return div;
}

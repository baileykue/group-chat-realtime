export default function createAddComment(
  form,
  imagePost,
  comments,
  { handleAddComment }
) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const commentData = new FormData(form);
    await handleAddComment(commentData.get('comment'), imagePost.id, comments);
    form.reset();
  });

  return () => {};
}

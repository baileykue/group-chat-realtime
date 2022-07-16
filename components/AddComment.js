export default function createAddComment(
  form,
  imagePost,
  { handleAddComment }
) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const commentData = new FormData(form);
    handleAddComment(commentData.get('comment'), imagePost.id);
    form.reset();
  });

  return () => {};
}

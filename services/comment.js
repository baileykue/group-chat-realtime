import { client } from './client.js';
import { getProfileById } from './profile.js';
import { getImagePostById } from './image-post.js';

export async function getComments(postId) {
  const response = await client
    .from('comments')
    .select(`*, profiles(*)`)
    .eq('image_post_id', postId)
    .order('created_at', { ascending: false });

  return response.data;
}

export async function addComment(comment) {
  const response = await client.from('comments').insert(comment).single();

  return response;
}

export function onComment(listener) {
  client
    .from('comments')
    .on('INSERT', async (payload) => {
      const comment = payload.new;
      const profile = await getProfileById(comment.profile_id);
      const imagePost = await getImagePostById(comment.image_post_id);
      comment.profile = profile;
      comment.imagePost = imagePost;
      listener(comment);
    })
    .subscribe();
}

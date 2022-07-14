import { client } from './client.js';

export async function getImagePosts() {
  const response = await client
    .from('image-posts')
    .select(`*`)
    .order('created_at', { ascending: false });

  return response.data;
}

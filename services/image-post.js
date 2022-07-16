import { client } from './client.js';

export async function getImagePosts() {
  const response = await client
    .from('image-posts')
    .select(`*`)
    .order('created_at', { ascending: false });

  return response.data;
}

export async function getImagePostById(id) {
  const response = await client
    .from('image-posts')
    .select('*')
    .eq('id', id)
    .single();

  return response.data;
}

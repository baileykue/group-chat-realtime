import { client } from './client.js';

export async function getProfileById(id) {
  const response = client.from('profiles').select('*').eq('id', id).single();

  return response.data;
}

import { getUser } from './auth-service.js';
import { client } from './client.js';

export async function getProfileById(id) {
  const response = client.from('profiles').select('*').eq('id', id).single();

  return response.data;
}

export async function getProfile() {
  const user = getUser();

  const response = await client
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single();

  return response.data;
}

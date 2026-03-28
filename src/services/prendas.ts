import client from './client';

export const getPrendas = async () => {
  const { data } = await client.get('/prendas');
  return data;
};

export const getPrendaById = async (id: number) => {
  const { data } = await client.get(`/prendas/${id}`);
  return data;
};
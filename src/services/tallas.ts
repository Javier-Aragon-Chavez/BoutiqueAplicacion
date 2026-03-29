import client from './client';
import { Talla } from '../constants/types';

export const getTallas = async (): Promise<Talla[]> => {
  const { data } = await client.get('/api/tallas');
  return data;
};

export const getTallaById = async (id: number): Promise<Talla> => {
  const { data } = await client.get(`/api/tallas/${id}`);
  return data;
};
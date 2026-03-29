import client from './client';
import { Color } from '../constants/types';

export const getColores = async (): Promise<Color[]> => {
  const { data } = await client.get('/api/colores');
  return data;
};

export const getColorById = async (id: number): Promise<Color> => {
  const { data } = await client.get(`/api/colores/${id}`);
  return data;
};
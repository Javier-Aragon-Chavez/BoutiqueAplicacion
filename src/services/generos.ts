import client from './client';
import { Genero } from '../constants/types';

export const getGeneros = async (): Promise<Genero[]> => {
  const { data } = await client.get('/api/generos');
  return data;
};

export const getGeneroById = async (id: number): Promise<Genero> => {
  const { data } = await client.get(`/api/generos/${id}`);
  return data;
};
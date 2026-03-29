import client from './client';
import { Categoria } from '../constants/types';

export const getCategorias = async (): Promise<Categoria[]> => {
  const { data } = await client.get('/api/categorias');
  return data;
};

export const getCategoriaById = async (id: number): Promise<Categoria> => {
  const { data } = await client.get(`/api/categorias/${id}`);
  return data;
};
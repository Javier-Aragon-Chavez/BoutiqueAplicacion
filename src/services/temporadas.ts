import client from './client';
import { Temporada } from '../constants/types';

export const getTemporadas = async (): Promise<Temporada[]> => {
  const { data } = await client.get('/api/temporadas');
  return data;
};

export const getTemporadaById = async (id: number): Promise<Temporada> => {
  const { data } = await client.get(`/api/temporadas/${id}`);
  return data;
};
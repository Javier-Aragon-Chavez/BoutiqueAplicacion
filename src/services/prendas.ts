import client from './client';
import { VwPrendaCompleta, Prenda } from '../constants/types';

export const getPrendas = async (): Promise<VwPrendaCompleta[]> => {
  const { data } = await client.get('/api/prendas');
  return data;
};

export const getPrendaById = async (id: number): Promise<Prenda> => {
  const { data } = await client.get(`/api/prendas/${id}`);
  return data;
};

export const getPrendasDetallePorPrenda = async (prendaId: number) => {
  const { data } = await client.get(`/api/prendas-detalle/prenda/${prendaId}`);
  return data;
};
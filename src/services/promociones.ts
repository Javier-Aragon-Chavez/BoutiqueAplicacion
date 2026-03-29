import client from './client';
import { Promocion } from '../constants/types';

export const getPromociones = async (): Promise<Promocion[]> => {
  const { data } = await client.get('/api/promociones');
  return data;
};

export const getPromocionesActivas = async (): Promise<Promocion[]> => {
  const { data } = await client.get('/api/promociones/activas');
  return data;
};
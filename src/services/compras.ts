import client from './client';
import { VwCompra, VwDetalleCompra } from '../constants/types';

export const getCompras = async (): Promise<VwCompra[]> => {
  const { data } = await client.get('/api/compras');
  return data;
};

export const getComprasByUsuario = async (usuarioId: number): Promise<VwCompra[]> => {
  const { data } = await client.get(`/api/compras/usuario/${usuarioId}`);
  return data;
};

export const getDetalleCompra = async (compraId: number): Promise<VwDetalleCompra[]> => {
  const { data } = await client.get(`/api/compras-detalle/compra/${compraId}/detalle`);
  return data;
};
import client from './client';
import { Usuario } from '../constants/types';

export const login = async (correo: string, clave: string): Promise<Usuario> => {
  const { data } = await client.post('/api/usuarios/login', { correo, clave });
  return data;
};

export const getUsuarioById = async (id: number): Promise<Usuario> => {
  const { data } = await client.get(`/api/usuarios/${id}`);
  return data;
};
import { useState } from 'react';
import { login } from '../services/usuarios';
import { Usuario } from '../constants/types';

export const useAuth = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const iniciarSesion = async (correo: string, clave: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await login(correo, clave);
      setUsuario(user);
    } catch {
      setError('Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  const cerrarSesion = () => setUsuario(null);

  return { usuario, loading, error, iniciarSesion, cerrarSesion };
};
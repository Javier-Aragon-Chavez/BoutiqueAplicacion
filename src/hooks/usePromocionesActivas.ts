import { useEffect, useState } from 'react';
import { getPromocionesActivas } from '../services/promociones';
import { Promocion } from '../constants/types';

export const usePromocionesActivas = () => {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPromocionesActivas()
      .then(setPromociones)
      .catch(() => setError('Error al cargar promociones'))
      .finally(() => setLoading(false));
  }, []);

  return { promociones, loading, error };
};
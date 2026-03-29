import { useEffect, useState } from 'react';
import { getPrendas } from '../services/prendas';
import { VwPrendaCompleta } from '../constants/types';

export const usePrendas = () => {
  const [prendas, setPrendas] = useState<VwPrendaCompleta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPrendas()
      .then(setPrendas)
      .catch(() => setError('No se pudo conectar a la API'))
      .finally(() => setLoading(false));
  }, []);

  return { prendas, loading, error };
};
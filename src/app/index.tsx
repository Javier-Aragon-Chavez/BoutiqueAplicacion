import { useEffect, useState } from 'react';
import {
  View, Text, FlatList, ActivityIndicator,
  StyleSheet, SafeAreaView, StatusBar
} from 'react-native';
import { getPrendas } from '../services/prendas';
import { VwPrendaCompleta } from '../constants/types';

export default function HomeScreen() {
  const [prendas, setPrendas]   = useState<VwPrendaCompleta[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    getPrendas()
      .then(setPrendas)
      .catch(() => setError('No se pudo conectar a la API'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#c9a96e" />
      <Text style={styles.loadingText}>Cargando prendas...</Text>
    </View>
  );

  if (error) return (
    <View style={styles.center}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0d0d0d" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          SILHOUETTE<Text style={styles.headerEm}>UX</Text>
        </Text>
        <Text style={styles.headerSub}>Colección 2025</Text>
      </View>

      <FlatList
        data={prendas}
        keyExtractor={item => item.prendaId?.toString() ?? item.id?.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.cardNombre}>{item.nombre}</Text>
              <Text style={styles.cardGenero}>{item.genero}</Text>
            </View>
            <View style={styles.cardBottom}>
              <Text style={styles.cardTag}>{item.coleccion}</Text>
              <Text style={styles.cardTag}>{item.temporada}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  center: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    color: '#888',
    fontSize: 14,
  },
  errorText: {
    color: '#c0392b',
    fontSize: 15,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 4,
  },
  headerEm: {
    color: '#c9a96e',
    fontStyle: 'italic',
  },
  headerSub: {
    color: '#666',
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 4,
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#141414',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    marginBottom: 12,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardNombre: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  cardGenero: {
    color: '#c9a96e',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  cardBottom: {
    flexDirection: 'row',
    gap: 8,
  },
  cardTag: {
    color: '#555',
    fontSize: 11,
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    letterSpacing: 0.5,
  },
});
export interface Categoria {
  id: number;
  nombre: string;
}

export interface Color {
  id: number;
  color: string;
  codigoHexa: string;
}

export interface Genero {
  id: number;
  genero: string;
}

export interface Talla {
  id: number;
  talla: string;
}

export interface Temporada {
  id: number;
  temporada: string;
}

export interface Prenda {
  id: number;
  nombre: string;
  generoId: number;
  temporadaId: number;
  coleccionId: number;
}

export interface VwPrendaCompleta {
  prendaId: number;
  nombre: string;
  genero: string;
  temporada: string;
  coleccion: string;
  categoria: string;
}

export interface PrendaDetalle {
  id: number;
  prendaId: number;
  stock: number;
  precio: number;
  colorId: number;
  tallaId: number;
  sku: string;
}

export interface Compra {
  id: number;
  usuarioId: number;
  total: number;
  activo: boolean;
}

export interface VwCompra {
  id: number;
  usuario: string;
  total: number;
  fecha: string;
}

export interface CompraDetalle {
  id: number;
  compraId: number;
  prendaDetalleId: number;
  cantidad: number;
}

export interface VwDetalleCompra {
  compraId: number;
  prenda: string;
  talla: string;
  color: string;
  cantidad: number;
  precio: number;
}

export interface Promocion {
  id: number;
  descuentoPorcentaje: number;
  fechaInicio: string;
  fechaFin: string;
  activo: boolean;
}

export interface Usuario {
  id: number;
  correo: string;
  clave: string;
  telefono: string;
  rolId: number;
  activo: boolean;
}
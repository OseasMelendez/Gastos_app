// Categorías disponibles para los gastos
// Cada categoría tiene: id, nombre, color de fondo y el componente de icono

import { Shopping, Utensils, MovieTicket, Car, Hospital } from '../components/icons';

export const CATEGORIES = [
  {
    id: 'groceries',
    name: 'Groceries',
    label: 'GROCERIES',
    bgColor: '#DBEAFE',      // Azul claro (fondo de la tarjeta)
    textColor: '#1E40AF',    // Azul oscuro (texto)
    icon: Shopping
  },
  {
    id: 'food',
    name: 'Food',
    label: 'FOOD',
    bgColor: '#FEF3C7',      // Amarillo claro
    textColor: '#92400E',    // Amarillo oscuro
    icon: Utensils
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    label: 'ENTERTAINMENT',
    bgColor: '#FCE7F3',      // Rosa claro
    textColor: '#9F1239',    // Rosa oscuro
    icon: MovieTicket
  },
  {
    id: 'transport',
    name: 'Transport',
    label: 'TRANSPORT',
    bgColor: '#D1FAE5',      // Verde claro
    textColor: '#065F46',    // Verde oscuro
    icon: Car
  },
  {
    id: 'health',
    name: 'Health',
    label: 'HEALTH',
    bgColor: '#E9D5FF',      // Morado claro
    textColor: '#6B21A8',    // Morado oscuro
    icon: Hospital
  }
];

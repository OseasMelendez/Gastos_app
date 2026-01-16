// Componente principal de la aplicación
import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import TotalExpenses from './components/TotalExpenses';
import ExpenseHistory from './components/ExpenseHistory';
import { CATEGORIES } from './constants/categories';

function App() {
  // Estado: array de gastos (empieza con datos de ejemplo)
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Weekly Groceries',
      category: CATEGORIES[0], // Groceries
      amount: 84.20,
      date: 'Oct 01, 2025'
    },
    {
      id: 2,
      description: 'Dinner with friends',
      category: CATEGORIES[1], // Food
      amount: 45.50,
      date: 'Oct 03, 2025'
    },
    {
      id: 3,
      description: 'Movie Tickets',
      category: CATEGORIES[2], // Entertainment
      amount: 24.00,
      date: 'Oct 05, 2025'
    },
    {
      id: 4,
      description: 'Gas Station',
      category: CATEGORIES[3], // Transport
      amount: 62.15,
      date: 'Oct 21, 2025'
    },
    {
      id: 5,
      description: 'Pharmacy',
      category: CATEGORIES[4], // Health
      amount: 12.30,
      date: 'Sep 01, 2025'
    }
  ]);

  // Función para agregar un nuevo gasto
  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]); // Agrega al inicio del array
  };

  // Calcular el total de todos los gastos
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="app">
      <div className="container">
        {/* Formulario para agregar gastos */}
        <ExpenseForm onAddExpense={handleAddExpense} />

        {/* Tarjeta del total */}
        <TotalExpenses total={total} />

        {/* Historial de gastos */}
        <ExpenseHistory expenses={expenses} />
      </div>
    </div>
  );
}

export default App;

// Componente que muestra la lista completa de gastos
// Props: expenses (array de objetos de gasto)

import { useState } from 'react';
import './ExpenseHistory.css';
import ExpenseItem from './ExpenseItem';
import { HistoryBoard } from './icons';

function ExpenseHistory({ expenses }) {
  // Estado para controlar si mostrar todos los gastos o solo 5
  const [showAll, setShowAll] = useState(false);

  // Límite de gastos a mostrar
  const LIMIT = 5;

  // Determinar qué gastos mostrar
  const displayedExpenses = showAll ? expenses : expenses.slice(0, LIMIT);

  // Función para alternar entre mostrar todos o solo algunos
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="expense-history">
      {/* Título con ícono */}
      <div className="history-header">
        <span className="history-icon"><HistoryBoard size={24} /></span>
        <h2 className="history-title">Expense History</h2>
      </div>

      {/* Lista de gastos */}
      <div className="history-list">
        {expenses.length === 0 ? (
          // Mensaje cuando no hay gastos
          <p className="empty-message">No expenses yet. Add your first one!</p>
        ) : (
          // Renderizar solo los gastos que deben mostrarse
          displayedExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))
        )}
      </div>

      {/* Botón solo se muestra si hay más de 5 gastos */}
      {expenses.length > LIMIT && (
        <button className="view-all-btn" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'View All Transactions'}
        </button>
      )}
    </div>
  );
}

export default ExpenseHistory;

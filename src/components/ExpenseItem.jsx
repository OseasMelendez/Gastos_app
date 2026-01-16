// Componente que muestra UN SOLO gasto en el historial
// Props: expense (objeto con: id, description, category, amount, date)

import './ExpenseItem.css';

function ExpenseItem({ expense }) {
  // Obtener el icono y colores de la categoría
  const Icon = expense.category.icon;

  return (
    <div className="expense-item">
      {/* Contenedor del ícono con fondo de color */}
      <div
        className="expense-icon"
        style={{ backgroundColor: expense.category.bgColor }}
      >
        <Icon size={24} />
      </div>

      {/* Información del gasto */}
      <div className="expense-info">
        <h3 className="expense-description">{expense.description}</h3>
        <p className="expense-details">
          <span style={{ color: expense.category.textColor }}>
            {expense.category.label}
          </span>
          {' · '}
          <span>{expense.date}</span>
        </p>
      </div>

      {/* Monto */}
      <div
        className="expense-amount"
        style={{ color: expense.category.textColor }}
      >
        ${expense.amount.toFixed(2)}
      </div>
    </div>
  );
}

export default ExpenseItem;

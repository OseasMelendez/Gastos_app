// Componente que muestra el total acumulado de gastos
// Props: total (número con el total calculado)

import './TotalExpenses.css';

function TotalExpenses({ total }) {
  return (
    <div className="total-expenses">
      <div className="total-content">
        <p className="total-label">TOTAL EXPENSES</p>
        <h2 className="total-amount">${total.toFixed(2)}</h2>
      </div>
      <div className="total-icon">💰</div>
    </div>
  );
}

export default TotalExpenses;

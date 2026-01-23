// Componente del formulario para agregar nuevos gastos
// Props: onAddExpense (función que se ejecuta al guardar)

import { useState } from "react";
import "./ExpenseForm.css";
import { CATEGORIES } from "../constants/categories";
import { Save } from "./icons";

function ExpenseForm({ onAddExpense }) {
  // Estado para cada campo del formulario
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validación: verificar que todos los campos estén llenos
    if (!amount || !categoryId || !description) {
      alert("Please fill all fields");
      return;
    }

    // Crear el objeto del nuevo gasto
    const newExpense = {
      id: Date.now(), // ID único basado en timestamp
      amount: parseFloat(amount), // Convertir string a número
      category: CATEGORIES.find((cat) => cat.id === categoryId), // Buscar categoría completa
      description: description.trim(), // Eliminar espacios al inicio/final
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    // Llamar a la función que nos pasaron como prop
    onAddExpense(newExpense);

    // Limpiar el formulario
    setAmount("");
    setCategoryId("");
    setDescription("");
  };

  return (
    <div className="expense-form-container">
      <div className="form-header">
        <h1 className="form-title">Record a New Expense</h1>
        <p className="form-subtitle">Keep track of your spending with ease.</p>
      </div>

      <form onSubmit={handleSubmit} className="expense-form">
        {/* Campo: Monto */}
        <div className="form-field">
          <label className="form-label">HOW MUCH?</label>
          <div className="amount-input-wrapper">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input"
            />
          </div>
        </div>

        {/* Campos: Categoría y Descripción en la misma fila */}
        <div className="form-row">
          {/* Campo: Categoría */}
          <div className="form-field">
            <label className="form-label">CATEGORY</label>
            <div className="select-wrapper">
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="category-select"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <span className="select-icon">📊</span>
            </div>
          </div>

          {/* Campo: Descripción */}
          <div className="form-field">
            <label className="form-label">DESCRIPTION</label>
            <input
              type="text"
              placeholder="What for?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description-input"
            />
          </div>
        </div>

        {/* Botón de guardar */}
        <button type="submit" className="save-btn">
          <Save size={18}/>
          <span>Save Expense</span>
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;

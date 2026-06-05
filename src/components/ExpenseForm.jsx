import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    const newExpense = {
      name: name,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
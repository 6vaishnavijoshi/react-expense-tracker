function ExpenseForm() {
  return (
    <div>
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense Name"
      />

      <input
        type="number"
        placeholder="Amount"
      />

      <button>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;
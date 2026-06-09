function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.map((expense, index) => (
        <div
          className="expense-item"
          key={index}
        >
          <span>
            {expense.name} - ₹{expense.amount}
          </span>

          <button
            onClick={() => deleteExpense(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;

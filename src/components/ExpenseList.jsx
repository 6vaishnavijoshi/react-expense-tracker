function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.map((expense, index) => (
        <div key={index}>
          <p>
            {expense.name} - ₹{expense.amount}
          </p>

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
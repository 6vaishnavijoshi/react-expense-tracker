function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.map((expense, index) => (
        <p key={index}>
          {expense.name} - ₹{expense.amount}
        </p>
      ))}
    </div>
  );
}

export default ExpenseList;

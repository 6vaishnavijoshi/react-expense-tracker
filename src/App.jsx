import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter(
      (_, index) => index !== indexToDelete
    );

    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;
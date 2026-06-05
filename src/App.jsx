import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <h1>Expense Tracker</h1>

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
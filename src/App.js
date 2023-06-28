
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const initialExpenses = [];


const App = () => {

const [expenses, setNewExpenses]=useState(initialExpenses);

 

  const addExpenseHandler = enteredExpense => {

    setNewExpenses(prevExpenes =>{
      return [enteredExpense, ...expenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;

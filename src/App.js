
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const initialExpenses = [
  {
    id:'e1',
    title:'książka',
    amount: 59.99,
    date: new Date(2020, 5, 21)
  }
];


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

//import Card from "./Card";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const ExpensesDatesHandler = (year) => {
        setFilteredYear(year);
    };
    const expensesByYear = props.expenses.filter(pickedYear => {
        return pickedYear.date.getFullYear().toString() === filteredYear
    });

   
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChangeHandler={ExpensesDatesHandler} />
                <ExpenseChart expenses={expensesByYear} />
               <ExpensesList item={expensesByYear} />
            </Card>
        </div>

    );
}
export default Expenses;
//import Card from "./Card";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear]=useState('2020');
    const ExpensesDatesHandler=(year)=>{
        setFilteredYear(year);
    };

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChangeHandler={ExpensesDatesHandler}>


            </ExpensesFilter>
            {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
        </Card>
        </div>

    );
}
export default Expenses;
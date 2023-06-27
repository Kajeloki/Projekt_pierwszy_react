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
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].price} date={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].price} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].price} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].price} date={props.expenses[3].date}></ExpenseItem>
            </ExpensesFilter>

        </Card>
        </div>

    );
}
export default Expenses;
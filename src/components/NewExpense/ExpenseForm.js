import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import './ExpenseForm.css'
import React, { useState } from 'react';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [btn, setBtn] = useState('add');
    const BtnHandler = () => {
        if (btn === 'add') {
            setBtn('adding');

        } else if (btn === 'adding') {
            setBtn('add');

        }

    }

    let zawartoscForm;

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpensesData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setBtn('add');
    };

    if (btn === 'add') {
        zawartoscForm = <div><button onClick={BtnHandler}>Dodaj wydatek</button></div>;
    } else if (btn === 'adding') {
        zawartoscForm = <div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Tytuł</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label >Wartość</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Data</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={BtnHandler}>Anuluj</button>
                <button type='submit'>Dodaj wydatek</button>
            </div>
        </div>;
    }
    return <form onSubmit={submitHandler}>
        {zawartoscForm}

    </form>

}
export default ExpenseForm;
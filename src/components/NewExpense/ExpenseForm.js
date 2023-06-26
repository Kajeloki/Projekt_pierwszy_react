import Card from '../UI/Card';
import './ExpenseForm.css'
import React, {useState} from 'react';
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value  );
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value  );
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value  );
    };
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Tytuł</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Wartosc</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Data</label>
                <input type='date' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Dodaj wydatek</button>
        </div>
    </form>

}
export default ExpenseForm;
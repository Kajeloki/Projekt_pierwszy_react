import ExpenseItem from "./ExpenseItem";        
import './ExpensesList.css';

const ExpensesList = (props) => {
    let expenseContent;
    if(props.item.length>0)
    {
        return (<ul className="expenses-list">
            {expenseContent=props.item.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </ul>)
    }
    
        return <h2 className="expenses-list__fallback">Nie znaleziono wydatków</h2>;
    
   
};
export default ExpensesList;
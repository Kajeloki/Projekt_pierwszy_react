import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('pl-PL', { month: 'long' });
    const year = props.date.toLocaleString('pl-PL', { year: 'numeric' });
    const day = props.date.toLocaleString('pl-PL', { day: '2-digit' });
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}
export default ExpenseDate;
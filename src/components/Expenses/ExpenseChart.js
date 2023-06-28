import Chart from "../Chart/Chart";

const ExpenseChart = (props) =>{
    const dataPoints=[
        {label: 'Sty', value:0},
        {label: 'Lut', value:0},
        {label: 'Mar', value:0},
        {label: 'Kwi', value:0},
        {label: 'Maj', value:0},
        {label: 'Cze', value:0},
        {label: 'Lip', value:0},
        {label: 'Sie', value:0},
        {label: 'Wrz', value:0},
        {label: 'Paź', value:0},
        {label: 'Lis', value:0},
        {label: 'Gru', value:0},
    ];
    for ( const expense of props.expenses)
    {
        const expenseMonth= expense.date.getMonth();
        dataPoints[expenseMonth].value += expense.amount;
    }
return <Chart dataPoints={dataPoints} />
}
export default ExpenseChart;

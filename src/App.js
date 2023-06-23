import ExpenseItem from "./components/ExpenseItem";
function App() {

  const expenses=[
    {
      id:'e1',
title: 'Ubezpieczenie samochodu',
price: 1000,
date: new Date(2023, 5, 23)
    },
    {
      id:'e2',
title: 'Ubezpieczenie zdrowotne',
price: 1000,
date: new Date(2023, 5, 23)
    }, 
    {
      id:'e3',
title: 'Ubezpieczenie nnw',
price: 1000,
date: new Date(2023, 5, 23)
    },
    {
      id:'e4',
title: 'Ubezpieczenie firmy',
price: 1000,
date: new Date(2023, 5, 23)
    },
  ]
  
  return (
    <div>
      
      <ExpenseItem title={expenses[0].title} amount={expenses[0].price} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].price} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].price} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].price} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

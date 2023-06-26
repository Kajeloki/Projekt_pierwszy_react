
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {

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
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;

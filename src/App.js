import React from 'react';
import './App.css';
import {Header} from './components/header'
import {AddTransaction}  from './components/add.transaction'
import { IncomeList } from './components/income.list'
import {ExpenseList} from './components/expense.list'
import {GlobalProvider} from './context/global.context'
function App() {
  return (
   <GlobalProvider>
		 <>
			<div className="top">
					<Header></Header>
				</div>
				<div className="bottom">
					<AddTransaction></AddTransaction>
					<div className="container clearfix">
							<IncomeList></IncomeList>
							<ExpenseList></ExpenseList>
					</div>
				</div>
				</>
	 </GlobalProvider>
  );
}

export default App;

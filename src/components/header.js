import React,{useContext} from 'react';
import {GlobalContext} from '../context/global.context'
export const Header = () =>{
  
	const {transactions} = useContext(GlobalContext)
	console.log('header : ',transactions.length)
	const incomeList = transactions.filter(item=>item.type==='inc');
	const totalIncome = incomeList.map(item=>item.amount).reduce((amt,item) =>(amt+=item),0).toFixed(2);
	const expenseList = transactions.filter(item=>item.type==='exp')
	const totalExpenses = expenseList.map(item => item.amount).reduce((amt,item) =>(amt+=item),0).toFixed(2);
	const balance = totalIncome - totalExpenses;
	
	const expensePercentage = Math.round((totalExpenses / totalIncome) * 100)

	return(
				<div className="budget">
					<div className="budget__title">
						My Wallet <span className="budget__title--month">balance</span>:
					</div>
					<div className="budget__value">₹{balance}</div>
					<div className="budget__income clearfix">
						<div className="budget__income--text">Income</div>
						<div className="right">
								<div className="budget__income--value">+ ₹{totalIncome}</div>
								<div className="budget__income--percentage">&nbsp;</div>
						</div>
					</div>
					<div className="budget__expenses clearfix">
						<div className="budget__expenses--text">Expenses</div>
						<div className="right clearfix">
								<div className="budget__expenses--value">- ₹{totalExpenses}</div>
								<div className="budget__expenses--percentage">{expensePercentage}%</div>
						</div>
					</div>
			</div>
	)
}
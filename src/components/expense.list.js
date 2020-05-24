import React,{useContext} from 'react';
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline'
import {GlobalContext} from '../context/global.context'
export const ExpenseList = () =>{

  const {transactions,deleteTractions} = useContext(GlobalContext)
	const expensesList = transactions.filter(item => item.type==='exp')
	const incomeList = transactions.filter(item=>item.type==='inc');
	const totalIncome = incomeList.map(item=>item.amount).reduce((amt,item) =>(amt+=item),0).toFixed(2);
	
	const calculatePercentage = (value) =>{
    return Math.round((value/totalIncome) * 100)
	}

	const remove = (e,id) =>{
		e.preventDefault();
		deleteTractions(id)
	}

	return (
		<div className="expenses">
		<h2 className="expenses__title">Expenses</h2>
		<div className="expenses__list">
			{
				expensesList.map(transaction =>(
							<div className="item clearfix" id="exp-0" key={Math.random()}>
							<div className="item__description">{transaction.description}</div>
							<div className="right clearfix">
								<div className="item__value">- ₹{transaction.amount}</div>
								<div className="item__percentage">{calculatePercentage(transaction.amount)}%</div>
								<div className="item__delete"><button className="item__delete--btn" onClick={(e) => remove(e,transaction.id)}><IosCloseCircleOutline /></button></div>
							</div>
					</div>
				))
			}
			
		</div>
 </div>
	)
}
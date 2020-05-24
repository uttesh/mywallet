import React,{useContext} from 'react';
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline'
import {GlobalContext} from '../context/global.context'
export const IncomeList = () =>{
 
	const {transactions,deleteTractions} = useContext(GlobalContext)
	
	const incomeList = transactions.filter(item => item.type ==='inc')

   const remove = (e,id) =>{
		 e.preventDefault();
		 deleteTractions(id);
	 }

	return(
		<div className="income">
		<h2 className="income__title">Income</h2>
		<div className="income__list">
			{
				incomeList.map(
					transaction =>(
									<div className="item clearfix" key={Math.random()}>
									<div className="item__description">{transaction.description}</div>
											<div className="right clearfix">
												<div className="item__value">+ ₹{ transaction.amount}</div>
												<div className="item__delete"><button className="item__delete--btn"
												onClick={(e) => remove(e,transaction.id)}
												><IosCloseCircleOutline/></button></div>
											</div>
									</div>
					)
				)
			}

		</div>
 </div>
	)
}
import React,{useState,useContext} from 'react';
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import {GlobalContext} from '../context/global.context'

export const AddTransaction = () =>{

	const [ amount,setAmount ] = useState(0);
	const [ description, setDescription] = useState('')
	const [ type, setType] = useState('inc')
	const {addTractions} = useContext(GlobalContext)

 const onSubmit = (e) =>{
	 e.preventDefault();
	 const _amount = Number(amount)
	 const transaction = {
		 id: Math.random(),
		 type:type,
		 amount:_amount,
		 description:description
	 }
	 addTractions(transaction)
 }

	return(
				<div className="add">
					<form onSubmit={onSubmit} >
							<div className="add__container">
									<select className="add__type red-focus" onChange={e => setType(e.target.value)}>
											<option value='inc'>Income</option>
											<option value='exp'>Expense</option>
									</select>
									<input type="text" value={description} onChange={e=> setDescription(e.target.value)}className="add__description red-focus" placeholder="Add description"/>
									<input type="number" value={amount} onChange={e =>{setAmount(e.target.value)}} className="add__value red-focus" placeholder="Value"/>
									<button className="add__btn active" ><IosCheckmarkCircleOutline /></button>
								</div>
					</form>

				</div>
	)
}
import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//  init the state parameter

const initialState ={
  transactions: [
		{id: Math.random(),type:'inc', amount:10000, description:'Salary'},
		{id: Math.random(), type:'inc', amount:5000, description:'MSI returns'},
		{id: Math.random(),type:'exp', amount:1000, description:'Rent'},
		{id: Math.random(), type:'exp', amount:5000, description:'Home loan EMI'}
	],
	totalIncome:0
}

// create the context

export const GlobalContext = createContext(initialState);

// create provider

export const GlobalProvider = ({children}) =>{
	 const [state,dispatch] = useReducer(AppReducer,initialState)

	 // actions functions
	 const addTractions = (transaction) =>{
       dispatch({
				 type: 'ADD_TRANSACTION',
				 payload: transaction
			 })
	 }

	 const deleteTractions = (id) =>{
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		})
}
	 
	 return (
		 <GlobalContext.Provider value={{
			 transactions: state.transactions,
			 addTractions,
			 deleteTractions
		 }}> 
		 {children}
		 </GlobalContext.Provider>
	 )


}
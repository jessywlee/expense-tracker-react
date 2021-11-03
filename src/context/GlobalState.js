import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {

	transactions: [
	{ id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
	],
	transactionTags:[]
}

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//actions
	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		})
	};

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		})
	};

	function addTransactionTags(tag, id) {
		dispatch({
			type: 'ADD_TRANSACTION_TAGS',
			payload: { tag: tag, id: id }
		})
	}

	return (
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			transactionTags: state.transactionTags,
			deleteTransaction,
			addTransaction,
			addTransactionTags
		}}>
			{children}
		</GlobalContext.Provider>
	);

}

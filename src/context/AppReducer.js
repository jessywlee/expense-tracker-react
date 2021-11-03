// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch(action.type) {
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
			}

		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [action.payload, ...state.transactions]
			}
		
		case 'ADD_TANSACTION_TAGS':
			return {
				...state,
				transactions: state.transactions.forEach((transaction) => {
					if (transaction.id === action.payload.id) {
						transaction.tags = action.payload.tag
					}
				}),
				transactionTags: [action.payload.tag, ...state.transactionTags]
			}
		default: 
		return state;
	}
}
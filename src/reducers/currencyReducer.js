let reducerDefaultState = {
    amount: 1.00, 
    code: "USD",
    currency: "United States Dollar", 
    icon_url: "https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/3-512.png", 
    bCode: "USD",
    bCurrency: "United States Dollar", 
    Bicon_url: "https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/3-512.png"
}
export default (state = reducerDefaultState, action) => {
    switch(action.type){
        case 'SELECT_CURRENCY':
            return {...state,
                code: action.code,
                currency: action.currency,
                icon_url: action.icon_url}
        case 'SELECT_BASE':
            return {...state,
                bCode: action.code,
                bCurrency: action.currency,
                Bicon_url: action.icon_url}    
        case 'SELECT_AMOUNT':
            return {...state,
                amount: action.amount}        
        default:
            return state
    }
}
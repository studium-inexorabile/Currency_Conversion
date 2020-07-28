let reducerDefaultState = {}
export default (state = reducerDefaultState, action) => {
    switch(action.type){
        case 'SET_DATA':
            return {
                ...state,
                ...action.data
            }   
        default:
            return state
    }
}
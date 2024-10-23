export const favReducer = (state,action)=>{
    switch(action.type){
        case 'ADD':{
            return [...state , action.payload]
        }
        case 'REMOVE':{
            return state.filter((recipe)=>recipe.id !== action.payload.id)
        }
        case 'CLEAR':{
            return [];
        }
        default: return state;
    }
}
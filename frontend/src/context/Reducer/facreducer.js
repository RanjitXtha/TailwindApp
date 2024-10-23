export const favReducer = (state,action)=>{
    switch(action.type){
        case 'ADD':{
            const exists = state.some(recipe => recipe.id===action.payload.id);
            if(exists){
                return state;
            }
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
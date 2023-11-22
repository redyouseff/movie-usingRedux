import {ACTION} from"../types/types.js"
const Tstate={pageCount:0,movies:[]}
export const moviesReducer =(state=Tstate,action)=>{
    switch(action.type){
        case ACTION :
            return {movies:action.data,pageCount:action.pageCount }
            default:
                return state
    }
    

}
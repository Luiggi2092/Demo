import { Product } from "./types";

interface State {
    count : number;
    numPage:number;
    products: Product[];
    name: string,
    Fill:boolean,
}

const initialState : State = {
    count :0,
    numPage:1,
    products:[],
    name:"",
    Fill:false,
}


export const counterReducer = (state=initialState,action:any): State => {
    switch(action.type){
        case 'INCREMENT': 
         return {
              ...state,
              count: state.count + 1,
          };
        case 'DECREMENT':
          return {
            ...state,
            count: state.count -1,
          }
        case 'GET_PRODUCTS':
            return {
               ...state,
               Fill:false,
               products:action.payload 
            }
        case 'FILL_NAME':
            return {
                ...state,
               Fill:true, 
               name:action.payload                
            }  
        case 'Page':
            return {
                ...state,
                numPage:action.payload
            }    
         default :
           return state; 
    }

};
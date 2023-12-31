import { Product,TypeProduct } from "../interfaces/Products";
import {Pet} from "../interfaces/Pets"
import {GET_PRODNAME,INCREMENT,GET_PRODUCTS,FILL_NAME,FILL_PROD,PAGE_NUMBER,GET_TYPES_PRODUCTS,GET_PETS,GET_PETSID,GET_CAT} from "./actions"


interface State {
    count : number;
    numPage:number;
    products: Product[];
    productTypes:TypeProduct[];
    productsxName: Product[];
    name: string,
    Fil:boolean,
    Pets:Pet[],
    PetsFill:Pet[],
    
    
    


}

const initialState : State = {
    count :0,
    numPage:1,
    products:[],
    productsxName:[],
    productTypes:[],
    name:"",
    Fil:false,
    Pets:[],
    PetsFill:[],

}


 const counterReducer = (state=initialState,action:any): State => {
    switch(action.type){
        case INCREMENT: 
         return {
              ...state,
              count: state.count + 1,
          };
        case GET_PRODUCTS:
            return {
               ...state,
               products:action.payload 
            }
        case FILL_NAME:
            return {
                ...state,
               name:action.payload                
            }  
        case PAGE_NUMBER:
            return {
                ...state,
                numPage:action.payload
            }
        case GET_PRODNAME:
              return {
                  ...state,
                  productsxName:action.payload,
              }
        case FILL_PROD:
            return {
                ...state,
                Fil:action.payload,
            }
        case GET_TYPES_PRODUCTS:
            return {
                ...state,
                productTypes:action.payload,
            }   
        case GET_PETS:
             return {
                ...state,
                Pets: action.payload
             } 
         case GET_PETSID:
            return {
                ...state,
                PetsFill:action.payload
            }      
         case GET_CAT:
            const Cat = state.products.filter((e:any)=>
            { for(let f in e.TypeProduct){
                     if(e.TypeProduct[f]== action.payload){
                         return e.TypeProduct;
                     };
            } }) 
            return {
                ...state,
                productsxName: Cat
            }   
         default :
           return state; 
    }

};

export default counterReducer;
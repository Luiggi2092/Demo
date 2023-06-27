import {Product} from './types'

export const increment = ()=>{
    return {
        type:'INCREMENT',
    };
};

export const decrement = ()=> {
    return {
        type:'DECREMENT',
    }
}


export const getProductos = (products :Product[])=> {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}

export const FillName = (name:string)=>{
    return {
        type: 'FILL_NAME',
        payload: name
    }
}

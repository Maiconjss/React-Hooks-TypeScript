import React,{
    useReducer
} from 'react';

interface Product {
    id: number,
    name:string,
    price:number,
}



interface Cart {
    products: String[],
    shipping_value?:number,
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE-PRODUCT'
}

const AppContext: React.FC = () => {

    const cart = useReducer(
        (state:Cart,action:CartActionType) => {
            switch(action.type){
                case'ADD_PRODUCT':
                    return{
                        ...state,
                        products: [...state.products, "novo produto"]
                    }
                case 'REMOVE-PRODUCT':
                    return 
                default:
                    return state;
            }
        },
        {
            products: [],
            shipping_value:0,
         },
    );

    return(
        <ul>

        </ul>
    )
}
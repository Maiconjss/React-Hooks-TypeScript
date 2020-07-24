import React,{
    useContext
} from 'react';

import CartContext from './CartContent';

const AppContext: React.FC = ()=>  {

    const {products}= useContext(CartContext);






    return(
        <ul>
            
        </ul>
    )
}

export default AppContext;
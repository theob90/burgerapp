import React from 'react';
import Button from '../../UI/Button/Button';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary =(props) => {

    // to ingredients eiani object format kai oxi array
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKeys =>{
        return (
        
            <li key={igKeys}><span style={{textTransform: 'capitalize'}}>
                {igKeys}</span >: {props.ingredients[igKeys]}
            </li>);
        
    });
    return(

        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following igredients</p>

            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxiliary>    

    );

};

export default orderSummary;
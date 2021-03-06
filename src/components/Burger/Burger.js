import React from 'react';
import classes from './Burger.module.css';
import Burgeringedient from './BurgerIngredient/Burgeringredient';

const burger = (props) => {
        // to map gia loop t kanw mono se arry,,edw eiani object
        // kanei to ingredients state apo to Builder se array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //ftiaxnei pinaka
            //exw ena pinaka me 2 elements tha doume meta ti elements
            // vazw underscore giati de me noiazei t element alla t index

            return[...Array(props.ingredients[igKey])].map((_,i) =>{
                return <Burgeringedient key ={igKey+i} type ={igKey}/>;
            });
        })
        //kaneis tranform ena array se kati allo
        //func gia iput previous value (arr) current value (el)
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if (transformedIngredients.length ===0){
            transformedIngredients = <p> please start adding</p>
        }

        console.log(transformedIngredients);
      return (
        <div className={classes.Burger}>
            <Burgeringedient type="bread-top"/>
            {transformedIngredients}
            <Burgeringedient type="bread-bottom"/>
         </div>
    );
};

export default burger;

// na dw reduce
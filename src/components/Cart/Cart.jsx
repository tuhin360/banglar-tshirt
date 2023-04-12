import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money!!!</small></p>
        </div>
    }


    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue': 'red'}>Order Summary: {cart.length}</h3>
            <p className={`bold ${cart.length===3 ? 'yellow': 'purple'}`}>Something</p>
            {
                cart.length > 2
                    ? <span className='purple'>Aro kino</span>
                    : <span>fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta ta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;



// CONDITIONAL RENDERING
// 1. use if or if else to set a variable that will contain an element, components
// 2. ternary operators: condition ? 'for true' : 'false'
// 3. Logical &&: (if the condition is true then the next thing will be displayed)
// 4. Logical ||: (if the condition is false then the next thing will be di splayed)


// CONDITIONAL CSS CLASS
// 1. use ternary
// 2. ternary inside template string
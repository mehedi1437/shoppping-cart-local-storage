import React, { useContext } from 'react';
import {CartContext} from "./MainLayout";
import CartItem from './Cards/CartItem';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {  removeFromDb } from '../utils/fakeDB';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext || []) ;
    console.log(cart)
    let total = 0
    if (cart?.length > 0) {
      for (const product of cart) {
        total = total + product.price * product.quantity
      }
    }

    console.log(cart);

    const handleRemoveItem = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
       
        removeFromDb(id)
        toast.error('Product Removed! 🔥')
      }
    const deleteCartHandler = () => {

    }
    const orderHandler = () => {

    }
    return (
       
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
        <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
          <h2 className='text-xl font-semibold'>
            {cart?.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
          </h2>
          <ul className='flex flex-col divide-y divide-gray-700'>
            {cart?.map(product => (
              <CartItem
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </ul>
          <div className='space-y-1 text-right'>
            <p>
              Total amount: <span className='font-semibold'>{total}$</span>
            </p>
            <p className='text-sm text-gray-400'>
              Not including taxes and shipping costs
            </p>
          </div>
          <div className='flex justify-end space-x-4'>
            {cart?.length > 0 ? (
              <>
                <button
                  type='button'
                  onClick={deleteCartHandler}
                  className='btn-outlined'
                >
                  Clear <span className='sr-only sm:not-sr-only'>Cart</span>
                </button>
              </>
            ) : (
              <>
                <Link to='/shop'>
                  <button
                    type='button'
                    onClick={deleteCartHandler}
                    className='btn-outlined'
                  >
                    Back <span className='sr-only sm:not-sr-only'>To Shop</span>
                  </button>
                </Link>
              </>
            )}
  
            <button onClick={orderHandler} type='button' className='btn-primary'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cart;
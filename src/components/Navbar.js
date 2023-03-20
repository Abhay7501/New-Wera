import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { useRef } from 'react'

const Navbar = ({ cart, addToCart, removeFromCart, subTotal, clearCart }) => {
    // console.log(cart, addToCart, removeFromCart, subTotal);
    const sideCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = React.useRef()
    return (
        <div className='shadow-xl '>
            <Link href={"/"} >
                <div className="flex ">
                    <img src="NEW WERA1.PNG" className='W-12 h-12 mt-5 ml-5 ' alt="" />
                    <span className="ml-5 mt-7 text-xl font-bold text-red-900">New Wera</span>
                </div>
            </Link>

            <div className='flex justify-center '>
                <ul className='flex space-x-8 text-xl '>
                    <Link href={"/shirt"} ><li className=''>Shirt</li></Link>
                    <Link href={"/Tshirt"}><li>T-shirt</li></Link>
                    <Link href={"/hoodies"}><li>Hoodies</li></Link>
                    <Link href={"/stickers"}><li>Stickers</li></Link>
                </ul>
            </div>

            <div onClick={sideCart}>
                <AiOutlineShoppingCart className="cart absolute right-0 mx-5 
              top-5 text-3xl cursor-pointer " />
            </div>
            <div ref={ref} className="sidebar absolute top-0 right-0 w-80 h-full bg-slate-500 p-5 transform translate-x-full transition-transform">
                <div onClick={sideCart} className=" absolute top-0 right-5 text-xl cursor-pointer"><AiFillCloseCircle /></div>
                <h2 className='font-bold text-2xl text-center'>Shopping cart</h2>
                <ol className="list-decimal">
                    {Object.keys(cart).length == 0 &&
                        <div>No item found!</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k}>
                            <div className="flex my-3 text-lg ">
                                <div className=" w-2/3 font-semibold ">{cart[k].name}</div>
                                <div className=" item-center justify-center w-1/3 flex text-lg "><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=' cursor-pointer text-2xl mx-1' /> {cart[k].qty} <AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=' cursor-pointer text-2xl mx-1' /></div>
                            </div>
                        </li>
                    })}
                </ol>
                <div className="flex">
                    <button class="flex mr-1 text-white bg-slate-600 border-0 py-2 px-5 focus:outline-none hover:bg-slate-800 rounded text-lg"><BsFillBagCheckFill className='m-1' />Checkout</button>
                    <button onClick={clearCart} className="flex mr-2 text-white bg-slate-600 border-0 py-2 px-5 focus:outline-none hover:bg-slate-800 rounded text-lg">Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'

const checkout = ({ cart, addToCart, removeFromCart, subTotal, clearCart }) => {
    return (

        <div className='container m-auto'>
            <h1 className='mt-28 font-bold text-center text-3xl'>checkout</h1>
            <h2 className='font-bold text-xl'>1.Delivery Details</h2>
            <div className="mx-auto flex">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <div className=" flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-xl text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>

                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <div className=" flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-xl text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className=" mb-4">
                    <div className=" flex-grow w-full">
                        <label htmlFor="address" className="leading-7 text-xl text-gray-600">Address</label>
                        <textarea type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <div className=" flex-grow w-full">
                            <label htmlFor="Phone" className="leading-7 text-xl text-gray-600">Phone</label>
                            <input type="Phone" id="Phone" name="Phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>

                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <div className=" flex-grow w-full">
                            <label htmlFor="City" className="leading-7 text-xl text-gray-600">City</label>
                            <input type="text" id="City" name="City" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <div className=" flex-grow w-full">
                            <label htmlFor="State" className="leading-7 text-xl text-gray-600">State</label>
                            <input type="text" id="State" name="State" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>

                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <div className=" flex-grow w-full">
                            <label htmlFor="pincode" className="leading-7 text-xl text-gray-600">Pincode</label>
                            <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
            </div>

            <div r className="sidebar  bg-slate-500 p-5 ">
                <h2 className='font-bold text-2xl text-center'>Shopping cart</h2>
                <ol className="list-decimal">
                    {Object.keys(cart).length == 0 &&
                        <div>No item found!</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k}>
                            <div className="flex my-3 text-lg ">
                                <div className=" w-2/3 font-semibold ">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                                <div className=" item-center justify-center w-1/3 flex text-lg "><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=' cursor-pointer text-2xl mx-1' /> {cart[k].qty} <AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className=' cursor-pointer text-2xl mx-1' /></div>
                            </div>
                        </li>
                    })}
                </ol>
                <div className="flex">
                    <Link href={"/checkout"}><button className="flex mr-1 text-white bg-slate-600 border-0 py-2 px-5 focus:outline-none hover:bg-slate-800 rounded text-lg"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>
                    <button onClick={clearCart} className="flex mr-2 text-white bg-slate-600 border-0 py-2 px-5 focus:outline-none hover:bg-slate-800 rounded text-lg">Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default checkout
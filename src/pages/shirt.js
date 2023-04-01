import React from 'react'
import Link from 'next/link'
import products from "models/products"
import mongoose from "mongoose";


const shirt = ({ Products }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap m-5 justify-center">
                        {Object.keys(Products).map((item) => {
                            return <Link href={`/product/${Products[item].slug}`} key={Products[item]._id} className=" mb-5" >
                                <div className="p-5 w-full cursor-pointer ">
                                    {/* hover:scale-125 hover:translate-y-3 */}
                                    <a className="block h-50  rounded overflow-hidden shadow-2xl">
                                        <img alt="ecommerce" className=" m-auto w-[30vh] h-[38vh] " src={Products[item].img} />
                                    </a>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{Products[item].title}</h2>
                                        <p className="mt-1">₹{Products[item].price}</p>
                                        <div className="mt-1">
                                            {Products[item].size.includes('S') && <span className='border border-gray-400 px-1 mx-1'>S</span>} {Products[item].size.includes('M') && <span className='border border-gray-400 px-1 mx-1'>M</span>}
                                            {Products[item].size.includes('L') && <span className='border border-gray-400 px-1 mx-1'>L</span>}      {Products[item].size.includes('XL') && <span className='border border-gray-400 px-1 mx-1'>XL</span>}
                                            {Products[item].size.includes('XXL') && <span className='border border-gray-400 px-1 mx-1'>XXL</span>}
                                        </div>
                                        <div className="mt-1">
                                            S,
                                            M,
                                            L,
                                            XL,
                                            XXL
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </section >
        </div >
    )
}

export async function getServerSideProps(context) {
    if (mongoose.connections[0].readyState) {
    }
    await mongoose.connect(process.env.MONGO_URI)
    let Products = await products.find({ category: 'shirt' })
    let shirt = {}
    for (let item of Products) {
        if (item.title in shirt) {
            if (!shirt[item.title].color.includes(item.color) && item.availableQty > 0) {
                shirt[item.title].color.push(item.color)
            }
            if (!shirt[item.title].size.includes(item.size) && item.availableQty > 0) {
                shirt[item.title].size.push(item.size)
            }
        }
        else {
            shirt[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                shirt[item.title].color = [item.color]
                shirt[item.title].size = [item.size]

            }
        }
    }
    return {
        props: { Products: JSON.parse(JSON.stringify(shirt)) }, // will be passed to the page component as props
    }
}
export default shirt

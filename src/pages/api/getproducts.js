// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "middleware/mongoose"
import products from "models/products"

const handler = async (req, res) => {
    let Products = await products.find()
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
    res.status(200).json({ shirt })
}
export default connectDB(handler);
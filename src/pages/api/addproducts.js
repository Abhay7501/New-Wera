// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "middleware/mongoose"
import Products from "models/products"

const handler = async (req, res) => {
    console.log("..");
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = new Products({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await p.save()
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}
export default connectDB(handler);
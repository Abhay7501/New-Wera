// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "middleware/mongoose"
import Products from "models/products"

const handler = async (req, res) => {
    console.log("..");
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = await Products.findByIdAndUpdate(req.body[i]._id, req.body[i])
            await p.save()
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }



}
export default connectDB(handler);
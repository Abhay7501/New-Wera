// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "middleware/mongoose"
import users from "models/users"

const handler = async (req, res) => {
    console.log("");
    if (req.method === 'POST') {
        console.log(req.body);
        let u = new users(req.body)
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}
export default connectDB(handler);
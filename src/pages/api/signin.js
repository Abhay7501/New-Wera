// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "middleware/mongoose"
import user from "models/users"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        let users = await user.findOne({ "email": req.body.email })
        if (users) {
            if (req.body.email == users.email && req.body.password == users.password) {
                res.status(200).json({ success: "success", email: users.email, name: users.name })
            }
            else {
                res.status(400).json({ success: "success", error: "Invalide password or email" })
            }
        }
    }
    else {
        res.status(400).json({ error: "User not found" })
    }
}

export default connectDB(handler);
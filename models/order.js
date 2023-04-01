const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, requried: true },
    products: [
        {
            productId: { type: String },
            quantity: { type: Number, default: 1 }
        }
    ],
    address: { type: String, requried: true },
    amount: { type: Number, requried: true },
    status: { type: String, default: 'pending', requried: true },

}, { timestamps: true });
export default mongoose.models("order", OrderSchema);
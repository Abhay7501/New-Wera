

const mongoose = require('mongoose');

let Product;

try {
    // Check if the model is already defined
    Product = mongoose.model('Product');
} catch (error) {
    // Define the model if it's not already defined
    const ProductSchema = new mongoose.Schema({
        title: { type: String, required: true },
        slug: { type: String, required: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        category: { type: String, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: String, required: true },
        availableQty: { type: String, required: true },
    }, { timestamps: true });

    Product = mongoose.model('Product', ProductSchema);
}

export default Product;

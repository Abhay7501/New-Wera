const mongoose = require('mongoose');

const UsesSchema = new mongoose.Schema({
    name: { type: String, requried: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, requried: true }

}, { timestamps: true });
mongoose.models = {}
export default mongoose.model("User", UsesSchema);

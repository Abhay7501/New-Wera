const mongoose = require('mongoose');

const UsesSchema = new mongoose.Schema({
    Name: { type: String, requried: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, requried: true },

}, { timestamps: true });
export default mongoose.models("User", UsesSchema);
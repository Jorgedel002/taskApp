import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    completeName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

export default mongoose.model('User', UserSchema)
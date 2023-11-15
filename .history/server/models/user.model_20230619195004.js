import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({ … }) 
export default mongoose.model('User', UserSchema)

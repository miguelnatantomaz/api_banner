import mongoose from "../database/index";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  banners: [{type: mongoose.Schema.Types.ObjectId, ref:'Banner'}]
})

const Customer = mongoose.model("Customer", CustomerSchema)

export default Customer
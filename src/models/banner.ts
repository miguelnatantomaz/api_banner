import mongoose from "../database/index";

const BannerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  image: {
    type: String,
    required: true
  },
  endAt: {
    type: String,
    required: true
  },
  startAt: {
    type: String,
    default: new Date().toLocaleString()
  },
  status:{
    type: Boolean,
    default: false
  },
  customerId :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Customer'
  }       
})

const Banner = mongoose.model("Banner", BannerSchema)

export default Banner
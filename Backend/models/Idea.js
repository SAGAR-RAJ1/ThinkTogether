const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: {
     url:String,
     filename:String,
    },
    //Reviews are one to many relation typically under thousands
    // reviews:[{
    //   type:Schema.Types.ObjectId,
    //   ref:"Review",
    // }],
    // owner:{
    //   type:Schema.Types.ObjectId,
    //   ref:"User",
    // }
  }, { timestamps: true });
  
  //listing delete krne k baad usk andr jo review h wo sara data v delete ho jaye
//   listingSchema.post("findOneAndDelete",async(listing)=>{
//     if(listing){
//       await Review.deleteMany({_id:{$in: listing.reviews}});
//     }
//   })
  
  const Idea = mongoose.model("Idea", ideaSchema);
  module.exports = Idea;
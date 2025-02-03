import mongoose,{ schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new schema(
  {
   videoFile:{
    type:String, //cloudinary url
    required: true,
   },
   thumbnail:{
    type:String,//cloudinary url
    required:true,
   },
   titel:{
    type:String,
    required:true,
   },
   description:{
    type:String,
    required:true,
   },
   views:{
    type:Number,
    default:0,
   },
   duration:{
    type:Number,
    required:true,
   },
   ispublished:{
     type:Boolean,
     default:true,
   },
   owner:{
    type:schema.Types.ObjectId,
    ref:"user",
   },
},
{Timestamps: true}
);

videoSchema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("video", videoSchema);
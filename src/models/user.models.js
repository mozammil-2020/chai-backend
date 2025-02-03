import monggose from "mongoose";

const userSchema = new schema({
  username:{
    type:String,
    required:true,
    unique: true,
    lowercase:true,
    trim: true,
    index:true,
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
  },
  fullname:{
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  avatar:{
    type:String, //clouddinary url
    required: true,
  },
  coverImage:{
    type:String, // cloudinary url
  },
  watchHistory:[
    {
      type:schema.Types.ObjectId,
      ref:"Video",
    },
  ],
  password:{
    type:String,
    required:[true, 'password is required'],
  },
  refreshToken:{
    type:String,
  },
},
{
Timestamps: true
}
)
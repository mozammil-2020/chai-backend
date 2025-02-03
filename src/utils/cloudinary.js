import {v2 as cloudinary} from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOncloudinary = async(localFilepath) => {
  try {
    if(!localFilepath)return null
    // upload the file on cloudinary

    const response = await cloudinary.uploader.upload(localFilepath,{
      resource_type: "auto"
    });
    // file has been uploaded successfull
    // console.log("file is uploaded on cloudinary", response.url)

    fs.unlikeSync(localFilepath)
    return response;
  } catch (error) {
    fs.unlinkSync(localFilepath) //removed the localy saved temporory file as the upload operation got failed
    return null;
  }
}

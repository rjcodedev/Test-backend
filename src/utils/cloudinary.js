import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs";
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload the local file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File has been uploaded successfully
    console.log("file uploaded to Cloudinary:", response.url);
    // Delete the local file if upload fails
    fs.unlinkSync(localFilePath);
    // Return the URL of the uploaded file
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    fs.unlinkSync(localFilePath); // Delete the local file if upload fails
    return null;
  }
};

export { uploadCloudinary };

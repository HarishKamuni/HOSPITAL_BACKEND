import app from './app.js';
import cloudinary from 'cloudinary';
import { dbConnection } from './database/dbConnection.js';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const start = async () => {
  try {
    await dbConnection(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server listening at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

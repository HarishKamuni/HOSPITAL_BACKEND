import mongoose from 'mongoose';

export const dbConnection = (uri) => {
  mongoose
    .connect(uri, {
      dbName: 'MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM',
    })
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((err) => {
      console.log('Some error occured while connecting to database:', err);
    });
};

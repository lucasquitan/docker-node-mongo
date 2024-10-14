import mongoose from 'mongoose';

export default mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connected');
  })
  .catch((e) => {
    console.log('[ERROR] ', e);
  });

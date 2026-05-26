import mongoose from 'mongoose';

const useSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: {
      type: Number || String,
    },
  },
  { versionKey: false },
);

export const userModel = mongoose.model('User', useSchema);

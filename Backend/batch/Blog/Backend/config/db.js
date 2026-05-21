import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const Connected = mongoose.connect(process.env.DataBase);

// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
import seedData from './seedData';

export default class Database {
  public static async open(mongoURL: string) {
    const options = {
      autoIndex: false, //auto indexing false
      minPoolSize: 10, //maintains 10 connections socket
    };
    try {
      mongoose.connect(mongoURL, options);
      console.log('Connected to MongoDB Successfully!');
      await seedData();
      return true;
    } catch (e) {
      throw new Error(`MongoDb connection Failed: ${mongoURL}`);
    }
  }
  public static close() {
    mongoose.disconnect();
  }
}

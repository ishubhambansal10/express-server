import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/versionableRepository';

export default class UserRepository extends VersionableRepository <IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super (userModel);
  }
  public async findOne(query): Promise<IUserModel> {
    return await super.findOne(query);
  }
  public async find(query, projection?: any, options?: any): Promise<IUserModel[]> {
    return await super.findAll(query, projection, options);
  }
  public count(): any {
    return super.count();
  }
  public create(data: any): any {
    console.log('UserRepository::create create', data);
    return super.create(data);
  }
  public async updateData(data: any): Promise<IUserModel> {
    const { _id , ...userData} = data;
    return await super.update({_id} , { ...userData});
  }
  public delete(data: any) {
    const result = super.softDelete(data);
    return result;
  }
}

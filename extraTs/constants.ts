/* eslint-disable shopify/no-useless-computed-properties */
/* eslint-disable import/no-unresolved */
import {IEmailType, IUserType} from './interfaces';

const trainee: string = 'trainee';
const trainer: string = 'trainer';
const headTrainer: string = 'head-trainer';
const Users: string = 'users';
const Trainees: string = 'trainees';

const permissions: IUserType = {
  [Users]: {
    all: [headTrainer],
    read : [trainee, trainer],
    write : [trainer],
    delete: [trainer],
  },
  [Trainees]: {
    all: [headTrainer],
    read : [trainee, trainer],
    write : [trainer],
    delete: [],
  }
};

const users : IEmailType[] = [
  {
    traineeEmail: 'shubham@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  }
];

export {permissions, users, Trainees, Users};
export const BCRYPT_SALT_ROUNDS: number = 6;

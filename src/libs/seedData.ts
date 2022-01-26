import UserRepository from '../repositories/user/UserRepository';
import config from '../config/configuration';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../../extraTs/constants';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        console.log('res', res);

        if (res === 0) {
            const salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
            const hash = bcrypt.hashSync(config.password, salt);
            console.log('Data seeding in progrss...');
            userRepository.create(
                {
                    name: 'Head Trainer',
                    role: 'head-trainer',
                    email: 'head.trainer@successive.tech',
                    password: hash,
                }
            );
            console.log('Data seeded successfully');
        }
    }).catch(err => console.log(err));
};

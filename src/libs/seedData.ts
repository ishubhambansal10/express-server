import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        console.log('res', res);

        if (res === 0) {
            console.log('Data seeding in progrss...');
            userRepository.create(
                {
                    name: 'Head Trainer',
                    role: 'head-trainer',
                    email: 'head.trainer@successive.tech',
                    password: 'Trainer@123'
                }
            );
            userRepository.create(
                {
                    name: 'Shubham Bansal',
                    role: 'trainee',
                    email: 'shubham@successive.tech',
                    password: 'shubham123'
                }
            );
            console.log('Data seeded successfully');
        }
    }).catch(err => console.log(err));
};

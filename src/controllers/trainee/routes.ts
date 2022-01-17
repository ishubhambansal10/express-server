import { Router } from 'express';
import TraineeRoutes  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { Trainees } from '../../../extraTs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const router = Router();

router.get('/', authMiddleWare(Trainees, 'read'), validationHandler(validation.get), TraineeRoutes.get);
router.post('/createToken', TraineeRoutes.createToken);
router.post('/', authMiddleWare(Trainees, 'write'), validationHandler(validation.create), TraineeRoutes.post);
router.put('/', authMiddleWare(Trainees, 'write'), validationHandler(validation.update), TraineeRoutes.put);
router.delete('/', authMiddleWare(Trainees, 'delete'), validationHandler(validation.delete), TraineeRoutes.delete);

export default router;

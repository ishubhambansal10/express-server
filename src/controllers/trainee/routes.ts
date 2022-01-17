import { Router } from 'express';
import TraineeRoutes  from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';

const router = Router();

router.get('/', validationHandler(validation.get), TraineeRoutes.get);
router.post('/', validationHandler(validation.create), TraineeRoutes.post);
router.put('/', validationHandler(validation.update), TraineeRoutes.put);
router.delete('/', validationHandler(validation.delete), TraineeRoutes.delete);

export default router;

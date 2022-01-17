import { Request, Response, NextFunction } from 'express';

const trainee = [
  {
    name: 'Shubham',
    designation: 'Developer',
    dept: 'Node',
  },
  {
    name: 'Jack',
    designation: 'Developer',
    dept: 'Node',
  },
];
class Trainee {
  get = (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(200)
      .send({ message: 'Fetched data Successfully', status: 'success', data: trainee });
  }
  post = (req: Request, res: Response, next: NextFunction) => {
    console.log('Create request by user', req.body);
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ message: 'Required trainee details', error: 'Bad request' });
    }
    return res.status(200).send({ message: 'Trainee added sucessfully', status: 'success' });
  }
  put = (req: Request, res: Response) => {
    console.log('Update request by user', req.body);
    const { name, designation, dept } = req.body;
    const newTrainee = trainee.find((item) => item.name === name);
    if (!newTrainee) {
      const updateTrainee = [...trainee, { name, designation, dept }];
      return res.status(201).send({ message: 'Trainee Updated successfully', data: updateTrainee });
    }
    return res.status(200).send({ message: 'Already exist', data: trainee });
  };
  delete = (req: Request, res: Response) => {
    console.log('Delete request by user', req.body);
    const { name } = req.body;
    const newTrainee = trainee.filter((data) => data.name !== name);
    return res.status(201).send({ message: 'Users deleted successfully', data: newTrainee });
  }
}

export default new Trainee();

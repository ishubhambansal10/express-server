import { Request, Response, NextFunction } from "express";

const trainee = [
  {
    name: "Vishvjeet",
    designation: "developer",
    location: "Pune",
  },
  {
    name: "Parmeet",
    designation: "Tester",
    location: "Mumbai",
  },
  {
    name: "Anurag",
    designation: "frontend Developer",
    location: "Noida",
  },
  {
    name: "Tanzeem",
    designation: "Designer",
    location: "Chennai",
  },
];
class Trainee {
  get(req: Request, res: Response, next: NextFunction) {
    return res
      .status(200)
      .send({ message: "Fetched data Successfully", data: trainee });
  }
  post(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    const { name, designation, location } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ message: "required trainee details", error: "error msg" });
    }
    return res.status(200).send({ message: "trainee added sucessfully" });
  }
  put = (req: Request, res: Response) => {
    const requestName = req.params.name;
    const data = trainee.find((post, index) => {
      if (post.name === requestName) return true;
    });
    data.designation = "Associate Engineer";
    return res
      .status(200)
      .send({ message: "Updated trainee successfully", data: trainee });
  };
  delete = (req: Request, res: Response) => {
    const requestName = req.params.name;
    const deletedData = trainee.filter((post, index) => {
      if (post.name !== requestName) return true;
    });
    return res
      .status(200)
      .send({ message: "deleted trainee successfully", data: deletedData });
  };
}

export default new Trainee();

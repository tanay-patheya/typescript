import express, { Request, Response, NextFunction } from "express";

const getData = (req: Request, res: Response, next: NextFunction) => {
  let data = {
    id: 2,
    name: "Tanay",
    email: "tanay@gmail.com",
  };
  res.send({ DATA: data }).status(200);
  console.log("Get Request");
  return;
};
const postData = (req: Request, res: Response, next: NextFunction) => {
  let data = req.body;
  res.send({ Data: data }).status(200);
  console.log("POST Request", data);
};
module.exports = { getData, postData };

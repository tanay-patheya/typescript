import express, { Request, Response, NextFunction } from "express";
const middlewareCheck = (next: NextFunction) => {
  console.log("Middleware Check");
  return;
  next;
};

module.exports = { middlewareCheck };

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextFunction, Request, Response } from 'express'
import { IFailedResponse } from '../_type/json'
import { AppError } from '../config/app-error'

export const handleError = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const json: IFailedResponse = {
    message: err.message,
    statusCode: err.statusCode,
    success: false,
  }
  res.status(err.statusCode).json(json)
}

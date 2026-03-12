import type { Request, Response, NextFunction } from 'express';

export const validateNumericId = (
  req: Request<{ id: string }>,
  res: Response<{ message: string }>,
  next: NextFunction,
): void => {
  const { id } = req.params;

  if (!/^\d+$/.test(id)) {
    res.status(400).json({ message: 'Pet ID must be a number' });
    return;
  }

  next();
};

export const pleaseAuth = (
  req: Request<{}, unknown, {}, { password?: string }>,
  res: Response<{ message: string }>,
  next: NextFunction,
): void => {
  const { password } = req.query;

  if (password === 'please') {
    next();
    return;
  }

  res.status(401).json({ message: 'Unauthorized you must say please' });
};

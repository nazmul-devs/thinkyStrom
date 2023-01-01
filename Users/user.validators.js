import { check } from "express-validator"

export const createUserValidator = [
    check('name').isLength({min:5,max:25})
    .withMessage("Name length must be 3 to 25 charecter"),
    check('address').notEmpty().withMessage("Address not be null"),
    check('age').isInt().withMessage("age must be integer")
]
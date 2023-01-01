import express from "express";
import {createUserValidator} from './user.validators.js'
import {allUsers, createUser} from './users.models.js'
const router= express.Router();

router.get('/all', allUsers);

router.post('/create',createUserValidator, createUser);

export default router;
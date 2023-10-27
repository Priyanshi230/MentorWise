import express from "express";
import {updateProfessor,deleteProfessor,getAllProfessor,getSingleProfessor} from "../Controllers/MentorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

// nested route

router.use("/:professorId/reviews",reviewRouter);

router.get('/:id',getSingleProfessor)
router.get('/',getAllProfessor)
router.put('/:id',authenticate,restrict(["mentor"]),updateProfessor)
router.delete('/:id',authenticate,restrict(["mentor"]),deleteProfessor)


export default router; 
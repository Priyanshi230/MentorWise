import express from 'express'
import { getAllReviews,createReview } from '../Controllers/reviewController.js'
import {authenticate,restrict} from './../auth/verifyToken.js';

const router = express.Router({mergeParams:true})
// professor/professorID/review

router
.route('/')
.get(getAllReviews)
.post(authenticate,restrict(["mentee"]),createReview);


export default router;

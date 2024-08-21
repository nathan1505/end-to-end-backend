"use strict"
import express from 'express';
import { createDuty, deleteDuty, getDuty, getAllDuties, updateDuty } from '../controllers/dutyController';

const router = express.Router();

// Route to get a specific duty by ID
router.get('/duties/:id', getDuty);

// Route to get all specific duties
router.get('/duties', getAllDuties);

// Route to create a new duty
router.post('/duties', createDuty);

// Route to update an existing duty
router.put('/duties/:id', updateDuty);

// Route to delete a duty
router.delete('/duties/:id', deleteDuty);

export default router;

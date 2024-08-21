"use strict"
import { Request, Response } from 'express';
import { query } from '../db/db';

export const getAllDuties = async (req: Request, res: Response) => {
    try {
        const { rows } = await query('SELECT * FROM duties');
        res.json(rows);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const getDuty = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const { rows } = await query('SELECT * FROM duties WHERE id = $1', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Duty not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const createDuty = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const { rows } = await query('INSERT INTO duties (id, name) VALUES (uuid_generate_v4(), $1) RETURNING *', [name]);
        res.status(201).json(rows[0]);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const updateDuty = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const { rows } = await query('UPDATE duties SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Duty not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

export const deleteDuty = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const { rows } = await query('DELETE FROM duties WHERE id = $1 RETURNING *', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Duty not found' });
        }
        res.status(204).json(); // No content to return after successful deletion
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

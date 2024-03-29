import express from 'express';
const router = express.Router();

import diaryService from '../services/diaryService';

import { toNewDiaryEntry } from '../utils';

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  const newDiaryEntry = toNewDiaryEntry(req.body);
  const addedEntry = diaryService.addDiary(newDiaryEntry);
  res.json(addedEntry);
});

export default router;

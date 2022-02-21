import React from 'react';
import { render, screen } from '@testing-library/react';
import { RCSentenceDTOs } from './RCSentenceDTOs';
import DummyExerciseProvider from '../services/exercise_provider/MockExerciseProvider';
import { RCSentenceDTO } from './todo/rc_sentence/RCSentenceDTO';

test('test questions extraction', () => {
    const d = new DummyExerciseProvider();
    return d.getExercise(90987890)
        .then(e => {
            let sentences = RCSentenceDTOs.extractChoices(e.todos[0] as RCSentenceDTO);
            expect(sentences.length).toBe(3);
        });
});
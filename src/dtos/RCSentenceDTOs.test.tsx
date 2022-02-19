import React from 'react';
import { render, screen } from '@testing-library/react';
import { RCSentenceDTOs } from './RCSentenceDTOs';
import DummyExerciseProvider from '../services/MockExerciseProvider';

test('test questions extraction', () => {
    const d = new DummyExerciseProvider();
    return d.getExercise(90987890)
        .then(e => {
            let sentences = RCSentenceDTOs.extractChoices(e.sentences[0]);
            expect(sentences.length).toBe(3);
        });
});
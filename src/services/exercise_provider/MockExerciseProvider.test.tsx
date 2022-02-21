import React from 'react';
import { render, screen } from '@testing-library/react';
import DummyExerciseProvider from './MockExerciseProvider';
import TodoType from '../../models/TodoType';

test('get exercise', () => {
    const d = new DummyExerciseProvider();
    d.getExercise(90987890)
});
test('get modified exercise', () => {
    const d = new DummyExerciseProvider();
    return d.putSentence(90987890, 0, {
        position: 12, assignables: [], answerMap: [], answerSheet: [],
        type: TodoType.RCSentenceType
    })
        .then(() => {
            return new DummyExerciseProvider().getExercise(90987890)
                .then(exercise => expect(exercise.todos[0].position).toBe(12))
        });
});
test('getting exercise will fail with an error', () => {
    return expect(new DummyExerciseProvider().getExercise(-1)).resolves.toBe(null);
});

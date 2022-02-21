import React from 'react';
import { render, screen } from '@testing-library/react';
import DummyExerciseProvider from './MockExerciseProvider';
import TodoType from '../../models/TodoType';
import ExerciseProvider from './ExerciseProvider';

test('get exercise', () => {
    return new ExerciseProvider().getExercises()
        .then(json => console.log(json[0]));
});

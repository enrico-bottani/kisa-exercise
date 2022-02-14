import React from 'react';
import { render, screen } from '@testing-library/react';
import { Assignable } from '../../../models/ExerciseSingleChoice';
import _3StepRCSentenceStatusBuilder from './_3StepRCSentenceStatusBuilder';

test('renders learn react link', () => {
    let a = ((new _3StepRCSentenceStatusBuilder).parseBody("Hello .. world").build())
    expect(a?.assignables.length).toEqual(3)
});


test('renders learn react link', () => {
    let a = ((new _3StepRCSentenceStatusBuilder).parseBody(".. world").build())
    expect(a?.assignables.length).toEqual(2)
});
test('renders learn react link', () => {
    let a = ((new _3StepRCSentenceStatusBuilder).parseBody("..").build())
    expect(a?.assignables.length).toEqual(2)
    expect(a?.submittable()).toEqual(false);
});
test('renders learn react link', () => {
    let a = ((new _3StepRCSentenceStatusBuilder).parseBody("An .. of .. .").build())
    expect(a?.assignables.length).toEqual(5)
    expect(a?.submittable()).toEqual(false);
});
test('renders learn react link', () => {
    let answer = [["", "in", "an"], ["", "in", "an"]]
    let a = ((new _3StepRCSentenceStatusBuilder)
        .parseBody("An .. of .. .")
        .setAnswers(answer)
        .setAnswerSheet([{ givenAnswer: 0, status: 0 }, { givenAnswer: 0, status: 0 }])
        .build())
    expect(a?.assignables.length).toEqual(5)
    expect(a?.submittable()).toEqual(true);
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { AssignableDTO } from '../../../dtos/DTOs';
import ThreeStepRCSentenceStatusBuilder from './_3StepRCSentenceStatusBuilder';

test('renders learn react link', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder).parseBody("Hello .. world").build())
    expect(a?.assignables.length).toEqual(3)
});


test('renders learn react link', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder).parseBody(".. world").build())
    expect(a?.assignables.length).toEqual(2)
});
test('renders learn react link', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder).parseBody("..").build())
    expect(a?.assignables.length).toEqual(2)
    expect(a?.submittable()).toEqual(false);
});
test('renders learn react link', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder).parseBody("An .. of .. .").build())
    expect(a?.assignables.length).toEqual(5)
    expect(a?.submittable()).toEqual(false);
});
test('renders learn react link', () => {
    let answer = [["", "in", "an"], ["", "in", "an"]]
    let a = ((new ThreeStepRCSentenceStatusBuilder)
        .parseBody("An .. of .. .")
        .setAnswers(answer)
        .setAnswerSheet([{ givenAnswer: 0, status: 0 }, { givenAnswer: 0, status: 0 }])
        .build())
    expect(a?.assignables.length).toEqual(5)
    expect(a?.submittable()).toEqual(true);
});
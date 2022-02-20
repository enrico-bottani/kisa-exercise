import React from 'react';
import { render, screen } from '@testing-library/react';
import { AssignableDTO } from '../../../dtos/DTOs';
import ThreeStepRCSentenceStatusBuilder from './_3StepRCSentenceStatusBuilder';

test('Parse one gap', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder()).parseBody(1, "Hello .. world").build())
    expect(a?.assignables.length).toEqual(3)
});
test('Parse one gap and check the id', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder()).parseBody(1, "Hello .. world").build())
    expect(a?.assignables.length).toEqual(3)
    expect(a?.id).toBe(1);
});

test('Parse one gap at the beginning of the sentence', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder()).parseBody(1, ".. world").build())
    expect(a?.assignables.length).toEqual(2)
});
test('Parse one gap without text', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder()).parseBody(1, "..").build())
    expect(a?.assignables.length).toEqual(2)
    expect(a?.submittable()).toEqual(false);
});
test('Parse two gaps', () => {
    let a = ((new ThreeStepRCSentenceStatusBuilder()).parseBody(1, "An .. of .. .").build())
    expect(a?.assignables.length).toEqual(5)
    expect(a?.submittable()).toEqual(false);
});
test('Parse two gap and set an answer sheet', () => {
    let answer = [["", "in", "an"], ["", "in", "an"]]
    let a = ((new ThreeStepRCSentenceStatusBuilder())
        .parseBody(1, "An .. of .. .")
        .setAnswers(answer)
        .setAnswerSheet([{ givenAnswerID: 0, status: 0, correctAnswerID: 0 }, { givenAnswerID: 0, status: 0, correctAnswerID: 0 }])
        .build())
    expect(a?.assignables.length).toEqual(5)
    expect(a?.submittable()).toEqual(true);
});
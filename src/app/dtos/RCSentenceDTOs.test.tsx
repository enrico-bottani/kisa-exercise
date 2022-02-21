import { RCSentenceDTOs } from './RCSentenceDTOs';
import { I_RCSentenceDTO } from "./exercise/todo/rc_sentence/I_RCSentenceDTO";
import { ITodoDTO } from './exercise/todo/ITodoDTO';
import DummyExerciseProvider from '../services/exercise_provider/MockExerciseProvider';
import JSONDeepCopy from '../utils/JSONDeepCopy';

test('test questions extraction', () => {
    const d = new DummyExerciseProvider();
    return d.getExercise(90987890)
        .then(e => {
            let sentences = RCSentenceDTOs.extractChoices(e.todos[0] as I_RCSentenceDTO);
            expect(sentences.length).toBe(3);
        });
});

// (Stupid test to check str immutability)
let fnChangeString = function (str: string): void {
    str = "mutable";
}
test('pass by reference string test', () => {
    const d = new DummyExerciseProvider();
    return d.getExercise(90987890)
        .then(e => {
            let str = "immutable";
            fnChangeString(str)
            expect(str).toBe("immutable");
        });
});

test('ITodo dto', () => {
    const itodo: ITodoDTO = {
        position: 0,
        type: "foo",
        dirty: false
    }
    console.log(JSONDeepCopy.deepCopy(itodo));
});
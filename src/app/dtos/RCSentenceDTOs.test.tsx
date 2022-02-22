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
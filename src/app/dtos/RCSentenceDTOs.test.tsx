import { RCSentenceDTOs } from './RCSentenceDTOs';
import { RCSentenceDTO } from "./exercise/todo/rc_sentence/RCSentenceDTO";
import { TodoDTO } from './exercise/todo/TodoDTO';
import DummyExerciseProvider from '../services/exercise_provider/MockExerciseProvider';
import JSONDeepCopy from '../utils/JSONDeepCopy';
import { RCSentence } from '../models/exercise/todo/rc_sentence/RCSentence';

test('test questions extraction', () => {
    const d = new DummyExerciseProvider();
    return d.getExercise(90987890)
        .then(e => {
            let sentences = RCSentenceDTOs.extractChoices(e.todos[0] as RCSentence);
            expect(sentences.length).toBe(3);
        });
});
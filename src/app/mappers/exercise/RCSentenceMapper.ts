import { I_RCSentenceDTO } from "../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import { RCSentence } from "../../models/exercise/todo/rc_sentence/RCSentence";


class RCSentenceMapper {
    static map(e: I_RCSentenceDTO): RCSentence {
        return RCSentence.builder()
            .setPosition(e.position)
            // TODO: Generate answer map
            .setAnswerMap([])
            .setAnswerSheet(e.answerSheet)
            .setAssignables(e.assignables)
            .setDirty(e.dirty === true)
            .setPosition(e.position)
            .build();
    }
}

export default RCSentenceMapper;
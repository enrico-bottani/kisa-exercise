import { AssignableDTO, RCAnswerableDTO, RCSentenceDTO } from "../../../../../dtos/DTOs";
import EditorExerciseControls from "../../../../../models/editor/EditorExerciseControls";
import RCChoicesEditor from "../choices/RCChoicesEditor";

interface Props {
    eeControls: EditorExerciseControls;
    rcSentenceDTO: RCSentenceDTO;
}
function RCGapsEditor({ rcSentenceDTO, eeControls }: Props) {
    var gaps: RCAnswerableDTO[] = rcSentenceDTO.answerMap.map(indexer => {
        return (rcSentenceDTO.assignables[indexer.index]) as RCAnswerableDTO;
    })
    let gapsTSX = gaps.map((rcAnswerableDto, i) => {
        return (<div className="row gx-1 mb-2">
            <div className="col-auto"><div className="btn btn-sm rounded-0 btn-secondary">a</div></div>
            <div className="col">
                <RCChoicesEditor id={rcSentenceDTO.answerMap[i].index} rcAnswerableDto={rcAnswerableDto} eeControls={eeControls}></RCChoicesEditor>
            </div>
        </div>)
    })
    return (
        <>
            <div className="container px-0">
                {gapsTSX}
            </div>
        </>
    );
}

export default RCGapsEditor;
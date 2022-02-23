import { RCAnswerableDTO } from "../../../../../../../dtos/DTOs";
import { RCSentenceDTO } from "../../../../../../../dtos/exercise/todo/rc_sentence/RCSentenceDTO";
import { RCSentence } from "../../../../../../../models/exercise/todo/rc_sentence/RCSentence";
import RCChoicesEditor from "../choices/RCChoicesEditor";

interface Props {
    stageRCSentenceEdits: (sentenceId: number, rcSentenceDTO: RCSentenceDTO) => void;
    rcSentenceDTO: RCSentence;
}
function RCGapsEditor({ rcSentenceDTO, stageRCSentenceEdits }: Props) {
    var gaps: RCAnswerableDTO[] = rcSentenceDTO.answerMap.map(indexer => {
        return (rcSentenceDTO.assignables[indexer.index]) as RCAnswerableDTO;
    });

    function onAnswerableEdited(gapKey: number, rcAnswerableDTO: RCAnswerableDTO): void {
        let answerableID = rcSentenceDTO.answerMap[gapKey].index;
        let rcSentDTO: RCSentenceDTO = JSON.parse(JSON.stringify(rcSentenceDTO));
        rcSentDTO.assignables[answerableID] = rcAnswerableDTO;
        stageRCSentenceEdits(rcSentenceDTO.position, rcSentDTO);
    }

    function onSetSolution(gapKey: number, givenAnswer: number) {
        let rcSentDTO: RCSentenceDTO = JSON.parse(JSON.stringify(rcSentenceDTO));
        rcSentDTO.answerSheet[gapKey] = { correctAnswerID: givenAnswer, givenAnswerID: -1, status: 0 }
        stageRCSentenceEdits(rcSentenceDTO.position, rcSentDTO);
    }




    let gapsTSX = gaps.map((rcAnswerableDto, gapIndex) => {
        let answerId = rcSentenceDTO.answerSheet[gapIndex]?.correctAnswerID;
        if (answerId === undefined) answerId = -1;
        return (
            <div className="row gx-1 mb-2" key={gapIndex}>
                <div className="col-auto">
                    <div className="btn btn-sm rounded-0 btn-secondary">{String.fromCharCode(65 + gapIndex)}</div>
                </div>
                <div className="col">
                    <RCChoicesEditor onSetSolution={onSetSolution} onAnswerableEdited={onAnswerableEdited}
                        gapKey={gapIndex}
                        answerId={answerId}
                        rcAnswerableDto={rcAnswerableDto}></RCChoicesEditor>
                </div>
            </div>)
    })
    return (
        <div className="container px-0">
            {gapsTSX}
        </div>
    );
}

export default RCGapsEditor;
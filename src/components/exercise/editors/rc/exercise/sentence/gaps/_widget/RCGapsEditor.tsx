import { RCAnswerableDTO, RCSentenceDTO } from "../../../../../../../../dtos/DTOs";
import RCChoicesEditor from "../choices/RCChoicesEditor";

interface Props {
    stageRCSentenceEdits: (sentenceId: number, rcSentenceDTO: RCSentenceDTO) => void;
    rcSentenceDTO: RCSentenceDTO;
}
function RCGapsEditor({ rcSentenceDTO, stageRCSentenceEdits }: Props) {
    var gaps: RCAnswerableDTO[] = rcSentenceDTO.answerMap.map(indexer => {
        return (rcSentenceDTO.assignables[indexer.index]) as RCAnswerableDTO;
    });

    function onAnswerableEdited(gapKey: number, rcAnswerableDTO: RCAnswerableDTO): void {
        let answerableID = rcSentenceDTO.answerMap[gapKey].index;
        let rcSentDTO: RCSentenceDTO = JSON.parse(JSON.stringify(rcSentenceDTO));
        rcSentDTO.assignables[answerableID] = rcAnswerableDTO;
        console.log("Submitting:", rcSentDTO.assignables[answerableID])
        stageRCSentenceEdits(rcSentenceDTO.id, rcSentDTO);
    }

    let gapsTSX = gaps.map((rcAnswerableDto, gapIndex) => {
        return (
            <div className="row gx-1 mb-2" key={gapIndex}>
                <div className="col-auto">
                    <div className="btn btn-sm rounded-0 btn-secondary">{String.fromCharCode(65 + gapIndex)}</div>
                </div>
                <div className="col">
                    <RCChoicesEditor onAnswerableEdited={onAnswerableEdited} gapKey={gapIndex} rcAnswerableDto={rcAnswerableDto}></RCChoicesEditor>
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
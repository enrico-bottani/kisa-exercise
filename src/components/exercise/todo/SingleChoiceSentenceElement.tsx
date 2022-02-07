import { SingleChoiceAnswer, SingleChoiceAnswerable, SingleChoiceSentence, StringConstant } from '../../../models/ExerciseSingleChoice';
import styles from './SingleChoiceSentenceElement.module.css'

interface Props {
  singleChoiceSentence: SingleChoiceSentence;
}

function SingleChoiceSentenceComponent(props: Props) {

  const answerables = JSON.parse(JSON.stringify(props.singleChoiceSentence.answerables)) as SingleChoiceAnswerable[];

  const children = props.singleChoiceSentence.strings.map((val) => {

    let singleChoiceAnswerable = answerables.shift();
    if (singleChoiceAnswerable !== undefined) {
      return (
        <div className="row gx-0">
          <p>{(val as StringConstant).value}</p>
          {singleChoiceAnswerable.choices.map((choice, i) => {
            let id = "SingleChoiceRatio" + i;
            return (
              <div className='col-auto'>
                <input type="radio" className="btn-check" name="btnradio" id={id} autoComplete="off" />
                <label className={"btn btn-outline-warning mb-2 me-2 " + styles.Choice} htmlFor={id}>{choice}</label>
              </div>
            )
          })}
        </div>)
      }
    else return <p>{(val as StringConstant).value}</p>;
    })

  return (<div>
    <div className="row mb-3">
      <div className="col">
        <div className="container p-0">
          <div className={"row gx-0 " + styles.TestSentence}>
            <div className='col-auto Next pt-2'>
              <div className="Next-icon-align">

              </div>
            </div>
            <div className='col pt-2 ps-3 pe-4'>
              {children}
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>)
}
export default SingleChoiceSentenceComponent;
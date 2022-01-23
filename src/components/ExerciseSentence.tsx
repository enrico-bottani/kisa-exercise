import { SingleChoiceAnswer, SingleChoiceAnswerable, SingleChoiceSentence, StringConstant } from '../models/ExerciseSingleChoice';
import styles from './ExerciseSentence.module.css'

interface Props {
  singleChoiceSentence: SingleChoiceSentence;
}

function ExerciseSentence(props: Props) {
  let sCS = props.singleChoiceSentence;
  let begin: number = sCS.begin;
  console.log(sCS.refs);
  const children = sCS.refs.map((val) => {
    switch (val.type) {
      case 'string':
        return <p>{(val as StringConstant).value}</p>
      case 'singleChoice':
        let singleChoices = val as SingleChoiceAnswerable;
        console.log(singleChoices)
        return (<div className="row gx-0">
          {singleChoices.choices.map((choice, i)=>{
            let id = "SingleChoiceRatio"+i;
            return(
            <div className='col-auto'>
              <input type="radio" className="btn-check" name="btnradio" id={id} autoComplete="off" />
              <label className={"btn btn-outline-warning mb-2 me-2 " + styles.Choice} htmlFor={id}>{choice}</label>
            </div>)
          })}

      </div>)
    }
  });

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
export default ExerciseSentence;

import styles from './ExerciseNumerator.module.css';
import { ExerciseSingleChoice } from '../models/ExerciseSingleChoice'
import ExerciseSingleChoiceSolution from '../models/ExerciseSolutionsGrind'
interface Props {
  excercise: ExerciseSingleChoice;
  excerciseNumber: number;
  onSetExercise: any;
}

function ExerciseNumerator(props: Props) {
  let setSelected = function(n: number){

    console.log("sentence: " + n); 
    
    console.log("was: "+ props.excercise.selected)
    props.onSetExercise(n);

  }

  var listItems = props.excercise.sentences.map(function (sentence) {

    let btnClass = "btn btn-sm rounded-0 ";
    let sign = <div></div>;
    let selected = ""
    if (props.excerciseNumber === sentence.number) {
      btnClass += "btn-outline-primary " + styles.Selected;
    }
    else {
      switch (sentence.status) {
        case 0: btnClass += "btn-outline-secondary"; break;
        case 1: {
          btnClass += "btn-outline-success";
          sign = <i className="bi bi-check-lg"></i>; break;
        }
        case 2: {
          btnClass += "btn-outline-danger";
          sign = <i className="bi bi-x"></i>; break;
        }
      }
    }
    return (
      <div className={"col-auto " + styles['Step-btn']} key={sentence.number}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className={btnClass} onClick={()=>setSelected(sentence.number)}>{sentence.number + 1}
            <div className={styles.FeedbackContainer}>{sign}</div>

          </button>
        </div>
      </div>
    )
  }
  );

  return (<div>
    <div className="row mb-3 gx-1 align-baseline">

      {listItems}
      {/*
      <div className={"col-auto " + styles['Step-btn']}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className="btn btn-sm rounded-0 btn-outline-success">01
            <div className={styles.FeedbackContainer}><i className="bi bi-check-lg"></i></div>

          </button>
        </div>
      </div>

      <div className={"col-auto " + styles['Step-btn']}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className="btn btn-sm rounded-0 btn-outline-success">02
            <div className={styles.FeedbackContainer}><i className="bi bi-check-lg"></i></div>
          </button>
        </div>
      </div>

      <div className={"col-auto " + styles['Step-btn']}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className="btn btn-sm rounded-0 btn-outline-danger">03
            <div className={styles.FeedbackContainer}><i className="bi bi-x"></i></div>

          </button>
        </div>
      </div>

      <div className={"col-auto " + styles['Step-btn']}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className={"btn btn-sm btn-outline-danger rounded-0 "}>04
            <div className={styles.FeedbackContainer}><i className="bi bi-x"></i></div>

          </button>
        </div>
      </div>

      <div className={"col-auto " + styles['Step-btn']}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className={"btn btn-sm btn-outline-primary rounded-0 " + styles.Selected}>04</button>
        </div>
      </div>

      <div className={"col-auto " + styles['Step-btn']}>
        <div className={styles['ratio-1-1']}>
          <button type="button" className="btn btn-sm btn-outline-secondary rounded-0">05</button>
        </div>
      </div>
      */}
    </div>
  </div>)
}
export default ExerciseNumerator;

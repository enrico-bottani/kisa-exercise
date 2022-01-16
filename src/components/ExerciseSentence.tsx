import styles from './ExerciseSentence.module.css'
function ExerciseSentence() {
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
              <p>Amy is always full&nbsp;</p>
              <div className="row gx-0">

                <div className='col-auto'>
                  <input type="radio" className="btn-check " name="btnradio" id="btnradio1" autoComplete="off" />
                  <label className={"btn btn-outline-warning mb-2 me-2 "+styles.Choice} htmlFor="btnradio1">of</label>
                </div>
                <div className='col-auto'>
                  <input type="radio" className="btn-check " name="btnradio" id="btnradio2" autoComplete="off" />
                  <label className={"btn btn-outline-warning mb-2 me-2 "+styles.Choice} htmlFor="btnradio2">on</label>
                </div>
                <div className='col-auto'>
                  <input type="radio" className="btn-check " name="btnradio" id="btnradio3" autoComplete="off" />
                  <label className={"btn btn-outline-warning mb-2 me-2 "+styles.Choice} htmlFor="btnradio3">at</label>
                </div>

              </div>
              <p>energy</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>)
}
export default ExerciseSentence;
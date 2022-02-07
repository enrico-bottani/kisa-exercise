import styles from './Navigation.module.css';
import { useEffect, useState } from 'react';


function Navigation() {

    return(
        <div className="row gx-1">

        <div className="col-auto">
            <button type="button" className="btn btn-light rounded-0"><i className="bi bi-arrow-left-circle"></i></button>
        </div>
        <div className="col-auto">
            <button type="button" className="btn btn-primary rounded-0">Check this</button>
        </div>
        <div className="col-auto">
            <button type="button" className="btn btn-light rounded-0"><i className="bi bi-arrow-right-circle"></i></button>
        </div>

    </div>
    )
}
export default Navigation;
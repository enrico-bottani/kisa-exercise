import styles from "./Header.module.css";
function Header() {
    return (<div className={styles.Header}>
        <div className="row gx-0">
            <div className="col">
                <h1 className={styles.Heading}> Put in the correct preposition</h1>

            </div>
            <div className="col-auto"></div>
        </div>
    </div>

    )
}

export default Header;